document.cookie = 'cross-site-cookie=bar; SameSite=None';

//Variables from Python set to Value in HTML
const CompositeDict = document.getElementById('CompositeDict').getAttribute('value');

var CompositeDict_js = JSON.parse(CompositeDict);
console.log(CompositeDict_js);

// Create empty arrays to store necessary values for upcoming plots
var Country = [];
var Produce = [];
var Coordinates = [];
var Guacamole = [];
// Iterate through CompositeDict_js and push all the values into their respective arrays
CompositeDict_js.forEach((data) => {
    Object.entries(data).forEach(([key, value]) => {
        if (key === "Country") {
            Country.push(value);
        }
        else if (key === "Produce") {
            Produce.push(value);
        }
        else if (key === "Coordinates") {
            Coordinates.push(value);
        }
        else if (key === "Guacamole") {
            Guacamole.push(value);
        }
    });
});
console.log(Country)
console.log(Produce)
console.log(Coordinates)
console.log(Guacamole)
console.log(Country[52])

// Creating map object
var map = L.map("map", {
  center: [22.8515625,
    27.68352808378776],
  zoom: 2,
  maxZoom: 20
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

// var indexworking = [2,3,4,5,8,9,10,12,13,14,15,16,17,18,19,21,23,24,25,26,27,29,30,31,32,33,34,35,36,38,39,41,42,43,44,45,46,47,48,49,52,53,54];
var indexworking = [2,3,4,5,6,9,10,11,12,13,14,15,16,17,18,19,20,22,23,25,26,27,28,30,31,32,33,34,35,36,38,39,40,42,43,44,45,46,47,48,49,50,53,54]
var indexnotworking = [0,1,7,37,41,51,52,8,21,24,29];
console.log(indexworking.length + indexnotworking.length)
var Countrypoly = [];
var i;
for (i = 0; i < indexworking.length; i++) {
    Countrypoly.push({
    "type": "Feature",
    "properties": {"produce": Produce[indexworking[i]], "guacamole": Guacamole[indexworking[i]], "country": Country[indexworking[i]]},
    "geometry": {
        "type": "Polygon",
        "coordinates": Coordinates[indexworking[i]]}
    });
}
// #JSON for Countries Not Working
Countrypoly.push(
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[0]], "country": Country[indexnotworking[0]]},"geometry":{"type":"Polygon","coordinates":[[[-66.97265625,-22.512556954051437],[-70.400390625,-31.353636941500987],[-70.048828125,-34.37971258046219],[-71.103515625,-37.579412513438385],[-71.982421875,-42.74701217318065],[-71.3671875,-44.96479793033101],[-72.861328125,-48.98021698537499],[-73.125,-50.56928286558241],[-71.455078125,-52.16045455774704],[-69.521484375,-51.890053935216905],[-68.5546875,-52.48278022207821],[-68.73046875,-54.826007999094955],[-65.654296875,-55.07836723201513],[-65.478515625,-54.67383096593114],[-67.5,-53.69670647530323],[-68.203125,-52.10650519075631],[-69.08203125,-50.457504020420565],[-67.763671875,-49.610709938074216],[-67.5,-48.86471476180277],[-65.56640625,-47.5765257137462],[-65.7421875,-47.10004469402519],[-67.587890625,-46.55886030311717],[-67.1484375,-45.33670190996811],[-65.126953125,-44.465151013519616],[-63.80859374999999,-42.42345651793831],[-65.126953125,-41.836827860727134],[-65.126953125,-40.6473035625225],[-63.19335937499999,-41.17865397233168],[-62.40234375,-40.58058466412763],[-62.40234375,-38.89103282648846],[-58.97460937499999,-38.61687046392973],[-57.041015625,-37.23032838760386],[-56.865234375,-36.10237644873643],[-58.35937499999999,-34.125447565116126],[-58.53515625,-33.3213485266988],[-58.13964843749999,-32.981020148981465],[-58.16162109375,-31.84956532831342],[-57.83203125,-30.4297295750316],[-56.35986328125,-28.92163128242129],[-55.6787109375,-28.16887518006333],[-54.4921875,-27.35225293806383],[-53.7451171875,-27.03955660216318],[-53.78906249999999,-25.918526162075153],[-53.98681640625,-25.52261464762328],[-54.60205078125,-25.60190226111573],[-54.755859375,-26.588527147308614],[-55.96435546875,-27.391278222579277],[-56.865234375,-27.566721430409707],[-57.89794921874999,-27.293689224852393],[-58.5791015625,-27.293689224852393],[-58.68896484375,-27.137368359795584],[-58.24951171874999,-26.608174374033094],[-58.11767578124999,-26.175158990178122],[-57.568359375,-25.443274612305732],[-58.0517578125,-24.96614015991296],[-60.05126953124999,-24.026396666017327],[-61.01806640624999,-23.785344805941214],[-61.8310546875,-23.120153621695614],[-62.35839843749999,-22.451648819126202],[-62.8857421875,-21.963424936844223],[-63.91845703124999,-21.963424936844223],[-64.35791015625,-22.836945920943844],[-64.62158203125,-22.187404991398775],[-65.14892578125,-22.024545601240327],[-65.7421875,-22.085639901650314],[-66.24755859375,-21.80030805097259],[-66.33544921875,-22.06527806776582],[-66.7529296875,-22.228090416784486],[-66.97265625,-22.512556954051437]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[1]], "country": Country[indexnotworking[1]]},"geometry":{"type":"Polygon","coordinates":[[[151.611328125,-32.99023555965107],[153.10546875,-30.826780904779774],[153.369140625,-25.95804467331783],[149.677734375,-22.431340156360594],[145.8984375,-17.056784609942543],[142.3828125,-10.746969318459989],[141.416015625,-12.983147716796566],[141.50390625,-15.876809064146757],[140.18554687499997,-17.644022027872726],[138.603515625,-16.8886597873816],[135.791015625,-15.199386048559994],[135.35156249999997,-14.349547837185362],[136.93359375,-12.297068292853805],[133.06640625,-11.695272733029402],[131.15478515625,-12.146745814539685],[130.14404296874997,-12.876069959946493],[130.2099609375,-13.2399454992863],[129.4189453125,-14.264383087562637],[129.6826171875,-14.859850400601037],[128.84765625,-14.83861155338482],[128.232421875,-14.732386081418454],[127.15576171875,-13.902075852500483],[126.23291015625,-14.157881896141461],[125.20019531249999,-14.477234210156507],[124.91455078125,-15.156973713377667],[124.43115234375,-15.496032414238622],[124.38720703124999,-16.320139453117562],[123.64013671874999,-16.066928957450106],[123.55224609375,-16.362309510240838],[123.79394531249999,-16.909683615558635],[123.53027343749999,-17.392579271057766],[122.9150390625,-16.467694748288956],[122.1240234375,-17.266727823520508],[122.29980468749999,-17.936928637549432],[121.4208984375,-19.228176737766248],[119.267578125,-20.05593126519445],[116.3232421875,-20.550508894195637],[114.7412109375,-21.779905342529634],[114.2578125,-22.553147478403194],[114.0380859375,-21.69826549685252],[113.818359375,-22.06527806776582],[113.6865234375,-23.039297747769726],[113.3349609375,-24.327076540018634],[113.99414062499999,-25.60190226111573],[113.90625,-26.31311263768267],[113.6865234375,-26.62781822639305],[114.9609375,-29.305561325527698],[114.9169921875,-30.334953881988564],[115.79589843749999,-31.91486750327621],[115.7080078125,-32.43561304116276],[115.53222656249999,-33.54139466898275],[115.00488281250001,-33.65120829920497],[115.09277343749999,-34.270835951649985],[116.1474609375,-34.99400375757576],[117.72949218749999,-35.101934057246055],[119.794921875,-33.97980872872456],[121.06933593749999,-33.687781758439364],[122.51953124999999,-33.90689555128866],[123.48632812499999,-33.8339199536547],[124.0576171875,-32.99023555965107],[125.9912109375,-32.21280106801518],[127.08984375000001,-32.249974455863295],[130.693359375,-31.503629305773018],[133.9453125,-32.32427558887654],[135.615234375,-34.74161249883172],[137.8125,-32.842673631954305],[137.548828125,-34.161818161230386],[137.28515624999997,-35.24561909420681],[138.1640625,-34.30714385628803],[139.5703125,-36.456636011596196],[140.537109375,-37.99616267972812],[145.8984375,-38.8225909761771],[149.23828125,-37.64903402157864],[151.611328125,-32.99023555965107]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[6]], "country": Country[indexnotworking[6]]},"geometry":{"type":"Polygon","coordinates":[[[22.060546874999996,10.746969318460001],[20.302734375,9.188870084473406],[18.852539062499996,9.015302333420598],[18.984375,8.537565350804018],[18.45703125,8.059229627200192],[16.787109375,7.667441482726068],[16.5234375,8.015715997869071],[15.4248046875,7.449624260197816],[14.5458984375,5.965753671065536],[14.897460937499998,4.12728532324537],[16.040039062499996,2.7235830833483856],[16.171875,2.1967272417616712],[16.6552734375,3.46955730306146],[17.5341796875,3.7327083213358465],[18.544921875,3.5134210456400448],[18.852539062499996,4.696879026871425],[19.5556640625,5.266007882805498],[21.0498046875,4.258768357307995],[22.543945312499996,4.171115454867424],[22.939453125,4.784468966579362],[23.5546875,4.653079918274051],[25.576171875,5.397273407690917],[27.509765625,5.090944175033399],[26.4990234375,6.489983332670651],[24.9169921875,8.102738577783168],[24.169921875,8.754794702435618],[23.5546875,8.841651120809145],[23.510742187499996,9.405710041600022],[23.73046875,9.838979375579344],[22.8955078125,11.049038346537106],[22.060546874999996,10.746969318460001]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[7]], "country": Country[indexnotworking[7]]},"geometry":{"type":"Polygon","coordinates":[[[-69.4775390625,-17.497389400663824],[-69.60937499999999,-17.644022027872726],[-69.818115234375,-17.65449123359241],[-69.796142578125,-18.020527657852327],[-70.02685546875,-18.291949733550325],[-70.33447265624999,-18.344097802101548],[-70.257568359375,-19.36297613334183],[-70.169677734375,-20.49906428341304],[-70.13671875,-21.51440672003028],[-70.400390625,-23.039297747769726],[-70.609130859375,-23.110049297356728],[-70.6201171875,-23.53377298325594],[-70.46630859375,-23.453168015916184],[-70.411376953125,-23.634459770994653],[-70.5322265625,-23.815500848699642],[-71.806640625,-30.826780904779774],[-71.455078125,-33.35806161277886],[-73.65234375,-37.5097258429375],[-73.388671875,-39.90973623453718],[-74.44335937499999,-42.94033923363182],[-75.5859375,-46.86019101567025],[-75.498046875,-50.457504020420565],[-75.05859375,-52.2143386082582],[-73.30078125,-54.162433968067795],[-70.224609375,-55.47885346331034],[-66.884765625,-55.77657301866769],[-66.324462890625,-55.0469089511379],[-68.73046875,-54.857639595549],[-68.609619140625,-52.479434758859384],[-70.048828125,-52.011936536753616],[-71.982421875,-52.00517397055568],[-73.212890625,-50.618102904924775],[-72.916259765625,-48.92249926375824],[-71.466064453125,-44.941473354802504],[-72.13623046875,-42.730874279284826],[-71.2353515625,-37.474858084971025],[-70.15869140625,-34.28899186503752],[-70.5322265625,-31.259769987394275],[-67.25830078125,-22.91792293614602],[-68.2470703125,-21.432616864477335],[-68.73046875,-20.014645445341355],[-68.4228515625,-19.373340713364044],[-68.92822265625,-18.94785578129413],[-69.08203125,-18.020527657852327],[-69.290771484375,-17.88465917954279],[-69.4775390625,-17.497389400663824]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[20]], "country": Country[indexnotworking[20]]},"geometry":{"type":"Polygon","coordinates":[[[47.900390625,8.059229627200192],[46.93359375,7.972197714386879],[43.81347656249999,8.971897294083027],[42.64892578125,10.595820834654035],[42.9345703125,10.962764256386821],[42.73681640625,11.027472194117934],[41.77001953125,10.962764256386821],[41.77001953125,11.609193407938953],[42.36328124999999,12.425847783029134],[40.95703125,14.093957177836224],[40.23193359375,14.477234210156519],[39.17724609375,14.583583455156525],[38.47412109375,14.392118083661728],[37.90283203125,14.859850400601049],[37.529296875,14.179186142354181],[37.33154296875,14.43468021529728],[36.54052734375,14.28567730018259],[36.1669921875,12.747516274952726],[35.74951171875,12.683214911818666],[34.82666015625,10.746969318460001],[34.60693359375,10.854886268472459],[34.365234375,10.682200600084114],[34.1455078125,9.579084335882534],[34.16748046875,8.581021215641854],[33.85986328125,8.407168163601076],[33.20068359375,8.428904092875392],[33.0029296875,7.885147283424331],[33.72802734375,7.689217127736191],[34.9365234375,6.5118147063479],[34.95849609375,6.096859818887948],[35.35400390625,5.462895560209557],[35.859375,5.375397774474748],[35.83740234375,4.8282597468669755],[35.947265625,4.521666342614804],[36.8701171875,4.477856485570586],[38.1005859375,3.6669277409287235],[39.46289062499999,3.425691524418062],[39.83642578125,3.9300201571114752],[40.75927734375,4.280680030820496],[41.1328125,3.995780512963038],[41.7919921875,4.017699464336852],[42.802734375,4.412136788910181],[43.87939453125,4.959615024698026],[44.9560546875,5.00339434502215],[47.900390625,8.059229627200192]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[22]], "country": Country[indexnotworking[22]]},"geometry":{"type":"Polygon","coordinates":[[[-53.98681640625,5.7690358661221355],[-54.42626953125,4.959615024698026],[-54.4482421875,4.039617826768437],[-54.052734375,3.5572827265412794],[-54.4921875,2.3065056838291094],[-54.11865234375,2.152813583128846],[-53.76708984375,2.3943223575350774],[-52.91015625,2.218683588558448],[-51.52587890625,4.324501493019203],[-52.64648437499999,5.244127581489541],[-53.15185546875,5.550380568997962],[-53.98681640625,5.7690358661221355]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[28]], "country": Country[indexnotworking[28]]},"geometry":{"type":"Polygon","coordinates":[[[-88.22021484375,15.718238544734854],[-89.14306640625,15.050905707724771],[-89.176025390625,14.636738848907621],[-89.307861328125,14.445319477691228],[-88.428955078125,13.912740120941834],[-88.11035156249999,13.976715394601785],[-87.69287109375,13.848747147537152],[-87.835693359375,13.432366575813761],[-87.34130859375,12.983147716796578],[-87.01171875,13.068776734357694],[-86.748046875,13.346865014577924],[-86.748046875,13.763395779624457],[-86.341552734375,13.848747147537152],[-86.02294921875,14.093957177836224],[-85.80322265625,13.848747147537152],[-85.20996093749999,14.317614840171856],[-85.045166015625,14.732386081418454],[-84.83642578125,14.82799134735208],[-84.52880859375,14.636738848907621],[-83.27636718749999,15.050905707724771],[-83.84765625,15.47485740268724],[-84.605712890625,15.834535741221565],[-85.111083984375,15.971891580928983],[-85.3857421875,15.855673509998681],[-85.8251953125,16.014136002085912],[-86.561279296875,15.802824941413187],[-87.374267578125,15.866241564066629],[-87.769775390625,15.950766025306109],[-88.22021484375,15.718238544734854]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[37]], "country": Country[indexnotworking[37]]},"geometry":{"type":"Polygon","coordinates":[[[172.705078125,-34.415973384481866],[174.7265625,-37.5097258429375],[174.4189453125,-39.0277188402116],[173.80371093749997,-39.266284422130646],[175.078125,-40.145289295676605],[175.166015625,-40.68063802521456],[174.4189453125,-41.211721510547875],[173.1884765625,-41.244772343082076],[172.705078125,-40.547200234410475],[172.001953125,-41.01306578700629],[170.33203125,-43.133061162406136],[167.87109375,-44.18220395771564],[166.3330078125,-45.644768217751924],[166.81640625,-46.49839225859761],[167.4755859375,-47.3090342477478],[170.771484375,-45.614037411350914],[171.3427734375,-44.245199015221274],[172.35351562499997,-43.67581809328341],[172.8643798828125,-43.91372326852401],[173.02642822265625,-43.87215823641542],[173.12530517578125,-43.739352079154706],[172.9632568359375,-43.630111446719205],[172.76824951171875,-43.566461725889596],[172.6885986328125,-43.39906090005085],[172.75726318359375,-43.167125915000284],[173.3642578125,-42.81152174509788],[174.26513671875,-41.77131167976406],[174.111328125,-41.45919537950705],[174.70458984375,-41.26129149391987],[175.3857421875,-41.640078384678915],[176.41845703125,-40.6473035625225],[177.0556640625,-39.77476948529546],[176.923828125,-39.33429742980723],[177.29736328125,-38.993572058209445],[177.95654296875,-39.21523130910491],[177.93457031249997,-38.685509760012],[178.330078125,-38.496593518947556],[178.505859375,-37.63163475580644],[178.0224609375,-37.54457732085582],[177.3193359375,-37.92686760148134],[176.2646484375,-37.71859032558814],[175.93505859375,-37.42252593456306],[175.58349609375,-36.56260003738545],[175.3857421875,-36.42128244364948],[175.25390624999997,-37.0551771066608],[174.77050781249997,-36.52729481454623],[174.66064453124997,-36.13787471840727],[174.26513671875,-35.26356186215208],[172.705078125,-34.415973384481866]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[40]], "country": Country[indexnotworking[40]]},"geometry":{"type":"Polygon","coordinates":[[[-75.4541015625,-0.08789059053082422],[-75.3662109375,-1.098565496040652],[-76.5966796875,-2.4162756547063733],[-78.3984375,-3.2940822283128046],[-79.1455078125,-4.959615024698014],[-80.33203125,-3.337953961416485],[-81.38671875,-4.258768357307995],[-81.1669921875,-6.0968598188879355],[-79.8046875,-7.01366792756663],[-76.201171875,-13.923403897723334],[-75.234375,-15.156973713377667],[-71.7626953125,-17.308687886770024],[-70.3564453125,-18.271086109608863],[-69.08203125,-16.467694748288956],[-68.64257812499999,-12.683214911818654],[-69.3896484375,-11.30770770776545],[-72.8173828125,-9.579084335882522],[-73.8720703125,-7.318881730366743],[-73.037109375,-5.353521355337321],[-71.89453125,-4.521666342614791],[-69.9169921875,-4.171115454867424],[-70.5322265625,-3.688855143147035],[-70.0048828125,-2.811371193331128],[-70.7080078125,-2.284550660236957],[-73.037109375,-2.284550660236957],[-74.4873046875,-0.4394488164139641],[-75.4541015625,-0.08789059053082422]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[50]], "country": Country[indexnotworking[50]]},"geometry":{"type":"Polygon","coordinates":[[[8.63525390625,36.87962060502676],[8.3056640625,36.12012758978146],[8.19580078125,34.651285198954156],[7.536621093749999,33.99802726234877],[7.8662109375,33.17434155100208],[9.140625,32.02670629333614],[9.5361328125,30.20211367909724],[10.1953125,30.713503990354965],[10.1953125,31.59725256170666],[11.49169921875,32.54681317351517],[11.57958984375,33.17434155100208],[10.2392578125,33.8339199536547],[9.9755859375,34.288991865037524],[10.78857421875,34.75966612466251],[11.1181640625,35.28150065789119],[10.7666015625,35.817813158696616],[10.37109375,36.24427318493909],[11.074218749999998,36.89719446989036],[10.9423828125,37.09023980307208],[10.37109375,36.84446074079564],[10.107421874999998,37.10776507118514],[9.84375,37.3002752813443],[9.426269531249998,37.33522435930639],[8.63525390625,36.87962060502676]]]}},
    {"type":"Feature","properties":{"produce": Produce[indexnotworking[51]], "country": Country[indexnotworking[51]]},"geometry":{"type":"Polygon","coordinates":[[[28.015136718749996,42.032974332441405],[27.531738281249996,41.902277040963696],[27.18017578125,42.147114459221015],[26.25732421875,41.78769700539063],[26.630859375,41.52502957323801],[26.323242187499996,41.22824901518529],[26.0595703125,40.66397287638688],[26.87255859375,40.64730356252251],[27.57568359375,41.062786068733026],[28.85009765625,40.97989806962013],[29.77294921875,40.74725696280421],[28.498535156249996,40.39676430557203],[27.2021484375,40.34654412118006],[26.78466796875,40.43022363450859],[26.12548828125,39.9434364619742],[26.03759765625,39.40224434029275],[26.9384765625,39.53793974517625],[26.630859375,39.198205348894795],[26.323242187499996,38.23818011979866],[27.2021484375,37.90953361677018],[27.13623046875,37.43997405227057],[28.015136718749996,37.03763967977139],[27.9931640625,36.686041276581925],[28.762207031249996,36.84446074079564],[29.355468750000004,36.2265501474709],[30.3662109375,36.20882309283712],[30.78369140625,36.87962060502676],[31.88232421875,36.58024660149864],[32.93701171875,36.03133177633187],[33.9697265625,36.33282808737919],[34.62890625,36.84446074079564],[35.3759765625,36.491973470593685],[35.947265625,36.932330061503144],[36.25488281249999,36.77409249464195],[35.859375,36.36822190085111],[35.96923828125,35.88905007936091],[36.3427734375,36.049098959065645],[36.58447265625,36.36822190085111],[36.62841796875,36.82687474287728],[37.28759765625,36.66841891894786],[38.3203125,36.932330061503144],[39.0234375,36.721273880045004],[39.8583984375,36.79169061907076],[40.7373046875,37.142803443716836],[41.66015625,37.160316546736745],[42.20947265625,37.31775185163688],[42.38525390625,37.142803443716836],[42.73681640625,37.37015718405753],[44.12109374999999,37.28279464911045],[44.29687499999999,37.03763967977139],[44.84619140624999,37.19533058280065],[44.31884765625,37.96152331396614],[44.47265625,38.35888785866677],[44.29687499999999,38.47939467327645],[44.033203125,39.40224434029275],[44.36279296874999,39.436192999314066],[44.6484375,39.825413103424786],[44.31884765625,40.04443758460856],[43.70361328125,40.094882122321145],[43.48388671875,40.44694705960048],[43.76953125,40.763901280945866],[43.4619140625,41.14556973100947],[42.73681640625,41.590796851056005],[42.4951171875,41.45919537950706],[41.5283203125,41.49212083968776],[40.23193359375,40.94671366508002],[39.4189453125,41.07935114946896],[38.29833984375,40.97989806962013],[37.82592773437499,41.0130657870063],[37.72705078125,41.14556973100947],[37.55126953125,41.04621681452063],[37.034912109375,41.18692242290294],[37.012939453125,41.29431726315258],[36.650390625,41.393294288784865],[36.49658203124999,41.269549502842565],[36.3427734375,41.29431726315258],[36.090087890625,41.50034959128928],[36.123046875,41.60722821271717],[35.958251953125,41.72213058512578],[35.5078125,41.64007838467894],[35.13427734375,41.7631174470059],[35.09033203125,42.04113400940807],[34.95849609375,42.09822241118974],[34.716796875,41.95131994679697],[33.804931640625,41.9921602333763],[33.321533203125,42.01665183556825],[32.618408203125,41.84501267270689],[31.409912109375004,41.352072144512924],[31.354980468749996,41.17038447781618],[30.926513671875004,41.08763212467916],[30.498046875,41.12074559016745],[30.278320312499996,41.21998578493921],[29.77294921875,41.16211393939692],[29.256591796874996,41.236511201246216],[28.63037109375,41.343824581185686],[28.201904296875,41.566141964768384],[28.004150390625,41.7631174470059],[28.015136718749996,42.032974332441405]]]}});

console.log((Produce[indexnotworking[0]]).length)

L.geoJSON(Countrypoly, {
  style: function(feature) {
      switch (feature.properties.guacamole) {
          case 'Yes': return {color: "#ff0000"};
      }
  }
}).addTo(map);

  

// var AvocadoCountries = L.layerGroup([Local_Guacamole, Semi_Local_Guacamole]);
// L.geoJSON(Countrypoly, {
//   style: function(feature) {
//       switch (feature.properties.guacamole) {
//           case "NO": return {color: "#ff0000"};
//       }
//   }
// }).addTo(map);


// var Local_Guacamole = L.geoJson(yourGeoJson, {
//     filter: function(feature, layer) {
//       return (feature.properties.status === "yes");
//     }
//   }).addTo(map);
  
// var Semi_Local_Guacamole= L.geoJson(yourGeoJson, {
//     filter: function(feature, layer) {
//       return (feature.properties.status === "no");
//     }
//   }).addTo(map);
  

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// polygon.bindPopup("I am a polygon." {feature.properties.produce});

var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);
// Alert________________________________________________
// function onMapClick(e) {
//   alert("You clicked the map at " + e.latlng);
//   }
  
// mymap.on('click', onMapClick);

// var popup = L.popup();
// Popup________________________________________________
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(map);






// var poly = L.polygon(polycoords).addTo(map);


function style(feature) {
  return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}
// Make the Country highlighted visually when they are hovered with a mouse
function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
  }
}

// L.geoJson(CompositeDict, {style: style}).addTo(map);