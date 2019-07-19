> # [my-twitch](https://github.com/LucasdRossi/my-twitch)

## Starting the aplication

To start the aplication you will need to run `yarn` to download the dependnces and then run `yarn start` on the three different folders and go to [http://localhost:3000](http://localhost:3000).  

## Streaming 

If you want start a stream you will need to use [OBS Studio](https://obsproject.com/pt-br) and then go to `Settings -> Stream` set:  

- `Service: Custom`
- `Server: rtmp://localhost/live`
- `Stream key: Stream Id`  

to see the **id** you can click on the title of the stream and it will apear on the **url** of the page.  
After setting this up, now you just need to click on `Start Streaming`.  
