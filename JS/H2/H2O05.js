(function(_0x1e8490,_0x3fd918){var _0x7ae621=_0x2262,_0x46219f=_0x1e8490();while(!![]){try{var _0x44d4f8=parseInt(_0x7ae621(0x137))/0x1*(-parseInt(_0x7ae621(0x133))/0x2)+-parseInt(_0x7ae621(0x131))/0x3+-parseInt(_0x7ae621(0x138))/0x4*(-parseInt(_0x7ae621(0x12d))/0x5)+-parseInt(_0x7ae621(0x134))/0x6*(parseInt(_0x7ae621(0x130))/0x7)+parseInt(_0x7ae621(0x12e))/0x8*(-parseInt(_0x7ae621(0x135))/0x9)+-parseInt(_0x7ae621(0x136))/0xa+parseInt(_0x7ae621(0x12c))/0xb;if(_0x44d4f8===_0x3fd918)break;else _0x46219f['push'](_0x46219f['shift']());}catch(_0x473df0){_0x46219f['push'](_0x46219f['shift']());}}}(_0x3e93,0xb82d1));var aantalRijenRaster=0x6,aantalKolommenRaster=0x9,celGrootte,spriteJos,xJos,yJos;function _0x3e93(){var _0x4429d1=['5909776uNluEa','grey','6989017wPdGWI','918672psxPbz','images/sprites/Jos100px/Jos_0.png','27904GlaJzi','6OTmAsw','9QTOTdP','4801610LAuUcB','79oPjYxf','204nIXtvq','images/backgrounds/dame_op_brug_1800.jpg','processing','40332490xaKvfL','69955bNWfIj'];_0x3e93=function(){return _0x4429d1;};return _0x3e93();}function _0x2262(_0x4f796e,_0x330833){var _0x3e937c=_0x3e93();return _0x2262=function(_0x226251,_0x150e43){_0x226251=_0x226251-0x12a;var _0x3ea02f=_0x3e937c[_0x226251];return _0x3ea02f;},_0x2262(_0x4f796e,_0x330833);}function preload(){var _0x4bcf98=_0x2262;brug=loadImage(_0x4bcf98(0x12a)),spriteJos=loadImage(_0x4bcf98(0x132));}function setup(){var _0x45c420=_0x2262;canvas=createCanvas(0x385,0x259),canvas['parent'](_0x45c420(0x12b)),celGrootte=width/aantalKolommenRaster,xJos=0x190,yJos=0x12c;}function draw(){image(brug,0x0,0x0,0x385,0x259),image(spriteJos,xJos,yJos),tekenRaster();}function tekenRaster(){var _0x4dead4=_0x2262;push(),noFill(),stroke(_0x4dead4(0x12f));for(var _0x24dc45=0x0;_0x24dc45<aantalRijenRaster;_0x24dc45++){for(var _0x279c72=0x0;_0x279c72<aantalKolommenRaster;_0x279c72++){rect(_0x279c72*celGrootte,_0x24dc45*celGrootte,celGrootte,celGrootte);}}rect(0x4*celGrootte,0x2*celGrootte,celGrootte,celGrootte),rect(0x4*celGrootte,0x2*celGrootte,celGrootte,celGrootte),pop();}