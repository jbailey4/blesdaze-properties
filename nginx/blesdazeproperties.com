upstream node_app_production {
	server 45.79.208.249:4200;
}

location ^~ /api {
  proxy_pass http://node_app_production;
  proxy_redirect off;
  proxy_http_version 1.1;
  proxy_set_header X-Real-IP $remote_addr; 
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for ; 
  proxy_set_header X-Forwarded-Proto https; 
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
}