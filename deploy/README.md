### DEPLOY
``npx pm2 deploy production setup``

### UPDATE
``npx pm2 deploy production``


``cd /etc/nginx/sites-enabled && sudo ln -s ../sites-available/foodz.jviatge.com``

``sudo service nginx restart``

``sudo certbot certonly --non-interactive --nginx -d foodz.jviatge.com -d www.foodz.jviatge.com --agree-tos --email julien.viatge@gmail.com`` 