function _0x3da3(_0x42c270,_0x435104){var _0x22df7f=_0x22df();return _0x3da3=function(_0x3da3aa,_0xd167e5){_0x3da3aa=_0x3da3aa-0xd7;var _0x1d0431=_0x22df7f[_0x3da3aa];return _0x1d0431;},_0x3da3(_0x42c270,_0x435104);}(function(_0xa9e7a9,_0x4f392b){var _0x1b04bb=_0x3da3,_0x44c9c8=_0xa9e7a9();while(!![]){try{var _0x3a67c9=parseInt(_0x1b04bb(0xdd))/0x1+-parseInt(_0x1b04bb(0xd7))/0x2*(-parseInt(_0x1b04bb(0xe0))/0x3)+-parseInt(_0x1b04bb(0xda))/0x4*(parseInt(_0x1b04bb(0xde))/0x5)+parseInt(_0x1b04bb(0xd8))/0x6*(-parseInt(_0x1b04bb(0xe5))/0x7)+parseInt(_0x1b04bb(0xd9))/0x8+parseInt(_0x1b04bb(0xe3))/0x9+-parseInt(_0x1b04bb(0xe2))/0xa;if(_0x3a67c9===_0x4f392b)break;else _0x44c9c8['push'](_0x44c9c8['shift']());}catch(_0x1eacff){_0x44c9c8['push'](_0x44c9c8['shift']());}}}(_0x22df,0x78b7f));var aantalRijenRaster=0x6,aantalKolommenRaster=0x9,celGrootte,spriteJos,xJos=0x190,yJos=0x12c;function _0x22df(){var _0x185933=['grey','2437480dNySvm','1841814XRbYsO','images/backgrounds/dame_op_brug_1800.jpg','831411ioVPYq','2558kVLxrN','30zQgQra','6414864SLPwAN','4UFdJhH','filter','parent','544862KbSeXg','4799155GQVjfJ','processing','1737xSEcJy'];_0x22df=function(){return _0x185933;};return _0x22df();}function preload(){var _0x547a89=_0x3da3;brug=loadImage(_0x547a89(0xe4)),spriteJos=loadImage('images/sprites/Jos100px/Jos_0.png');}function setup(){var _0x4347fc=_0x3da3;canvas=createCanvas(0x384,0x258),canvas[_0x4347fc(0xdc)](_0x4347fc(0xdf)),frameRate(0xa),celGrootte=width/aantalKolommenRaster;}function draw(){var _0x1f1f4f=_0x3da3;background(brug),tekenRaster();if(keyIsDown(RIGHT_ARROW))xJos+=celGrootte;else{if(keyIsDown(LEFT_ARROW))xJos-=celGrootte;else{if(keyIsDown(UP_ARROW))yJos-=celGrootte;else keyIsDown(DOWN_ARROW)&&(yJos+=celGrootte);}}xJos=constrain(xJos,0x0,width-celGrootte),yJos=constrain(yJos,0x0,height-celGrootte),image(spriteJos,xJos,yJos),xJos==0x6*celGrootte&&yJos==0x4*celGrootte&&spriteJos[_0x1f1f4f(0xdb)](ERODE);}function tekenRaster(){var _0x1b2aa8=_0x3da3;push(),noFill(),stroke(_0x1b2aa8(0xe1));for(var _0x2e7d96=0x0;_0x2e7d96<aantalRijenRaster;_0x2e7d96++){for(var _0x5c06e3=0x0;_0x5c06e3<aantalKolommenRaster;_0x5c06e3++){rect(_0x5c06e3*celGrootte,_0x2e7d96*celGrootte,celGrootte,celGrootte);}}pop();}