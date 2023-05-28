export PATH=$PATH:/bin:/usr/local/bin

########### CONFIG ############
NAME="foodz"
NAME_IMAGES_BACKUP="app-backup server-backup"
RUN_PARAMS="-p 8081:80"
PATH_BACKUP="docker/save"
RUN_LIST=(
    "-p 5001:5001 --name server-backup $NAME-server"
    "-p 8081:80 --name app-backup $NAME-app"
)
########### CONFIG ############

## null | "nobackup" | "restore"
ARG1=$1

# ID_CONTAINER=$(docker container ls -a | grep $NAME-app | cut -d " " -f 1)
# ID_IMAGE=$(docker images -q $NAME-app | uniq)

function clearDocker {
    #docker stop $1
    #docker rm $2
    #docker image rm $2
    # Stop all running containers
    docker stop $(docker ps -aq)
    # Remove all containers
    docker rm $(docker ps -aq)
    # Remove all images
    docker rmi $(docker images -q)
}

if [ "$ARG1" == "restore" ];then

    clearDocker

    # LOAD BACKUP
    docker image load -i ./$PATH_BACKUP/$NAME-backup.tar

    for RUN in ${RUN_LIST[@]}; do
      docker run $RUN
    done

else

    # CLEAR UNUSED
    docker container prune --force
    docker image prune -a --force

    # SAVE BACKUP
    if [ "$ARG1" != "nobackup" ];then
        docker save $(docker images -q) -o ./$PATH_BACKUP/$NAME-backup.tar
    fi

    # RUN BUILD
    docker-compose build

    # check if backup is running
    ID_BACKUP="$(docker container ls -a | grep app-backup | cut -d " " -f 1)"

    if [-n "$ID_BACKUP"]; then clearDocker ; fi

    docker-compose up -d
fi
