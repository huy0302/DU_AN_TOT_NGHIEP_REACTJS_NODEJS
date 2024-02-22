# 
test

# BE PORT => 3020


#INFO
### `- FE => banhngot.topcode.fun`
### `- BE => api-vitagreen.id.vn`
### `- CMS => cms-banhngot.topcode.fun`
#RUN BUILD REACTJS

### `pm2 start dist/main.js --name 2023_nodejs_reactjs_traicay_be => PORT 3020`
### `pm2 --name 2023_nodejs_reactjs_traicay_fe  serve build/ 4021 --spa`
### `pm2 --name 2023_nodejs_reactjs_traicay_cms  serve build/ 4020 --spa`
