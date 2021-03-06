var eventsArray = [{"startDate":"10/1/2017","endDate":"10/6/2017","name":"IEEE VIS","type":"conference","location":"Phoenix, AZ","url":"http://ieeevis.org/"},{"startDate":"9/20/2017","name":"Johanna Drucker: Visualization and Knowledge: Modelling, Discovery, Display","type":"talk","location":"University Center, 63 Fifth Avenue, UL105","url":"http://blogs.newschool.edu/integrative-phd/event/johanna-drucker/","notes":"6:00pm"},{"startDate":"10/12/2017","name":"Visual Trumpery, Alberto Cairo","type":"talk","location":"The Auditorium, Alvin Johnson/J.M. Kaplan Hall, 66 West 12th Street","url":"https://visualtrumperytour.wordpress.com/","notes":"8:00pm"},{"startDate":"6/26/2017","endDate":"6/29/2017","name":"Eyeo Festival","type":"conference","location":"Minneapolis, MN","url":"http://eyeofestival.com/"},{"startDate":"9/23/2017","endDate":"9/24/2017","name":"World Maker Faire","type":"exhibition","location":"New York, NY","url":"http://makerfaire.com"},{"startDate":"4/22/2017","name":"See: The Conference for Visualization of Information","type":"conference","location":"Wiesbaden, Germany","url":"https://www.see-conference.org"},{"startDate":"10/6/2017","endDate":"10/7/2017","name":"PyGotham","type":"conference","location":"New York, NY","url":"https://2017.pygotham.org/"},{"startDate":"10/20/2017","endDate":"10/21/2017","name":"push.conference","type":"conference","location":"Munich","url":"http://push-conference.com/2017/"},{"startDate":"4/24/2017","endDate":"4/25/2017","name":"OPENVIS CONF","type":"conference","location":"Boston, MA","url":"https://openvisconf.com/"},{"startDate":"5/6/2017","endDate":"5/11/2017","name":"ACM CHI Conference on Human Factors in Computing Systems","type":"conference","location":"Denver, CO","url":"https://chi2017.acm.org/"},{"startDate":"6/12/2017","endDate":"6/16/2017","name":"EuroVis","type":"conference","location":"Barcelona","url":"http://eurovis2017.virvig.es/"},{"startDate":"6/20/2017","endDate":"6/21/2017","name":"MongoDB World","type":"conference","location":"Chicago, IL","url":"https://www.mongodb.com/world17"},{"startDate":"7/6/2017","endDate":"7/7/2017","name":"xCoAx","type":"conference","location":"Lisbon, Portugal","url":"http://xcoax.org/","focus":"xCoAx is an exploration of the intersection where computational tools and media meet art and culture, in the form of a multi-disciplinary enquiry on aesthetics, computation, communication and the elusive X factor that connects them all."},{"startDate":"7/10/2017","endDate":"7/16/2017","name":"SciPy","type":"conference","location":"Austin, TX","url":"http://conference.scipy.org/"},{"startDate":"7/30/2017","endDate":"8/3/2017","name":"SIGGRAPH","type":"conference","location":"Los Angeles, CA","url":"http://s2017.siggraph.org/"},{"name":"NYC D3.js","type":"meetup","location":"New York, NY","url":"http://www.meetup.com/NYC-D3-JS/","focus":"D3 JavaScript library"},{"name":"Data Visualization New York","type":"meetup","location":"New York, NY","url":"https://www.meetup.com/DataVisualization/","focus":"data visualization"},{"name":"The NYC Data Skeptics Meetup","type":"meetup","location":"New York, NY","url":"https://www.meetup.com/The-NYC-Data-Skeptics-Meetup/","focus":"mathematical, ethical, and business aspects of data from a skeptical perspective"}];

var variablelist = []
var data = []

function dd(dt) {
    d = new Date(dt)
    return d.getDate()
};

function mm(dt) {
    m = new Date(dt)
    return m.getMonth()
};

function yyyy(dt) {
    y = new Date(dt)
    return y.getFullYear()
};

nodate = []


for(i=0;i<eventsArray.length;i++) {
    variablelist[i] = eventsArray[i]["name"];
    variab = variablelist[i];
    var today = new Date();
    var todaydate = new Date(yyyy(today),mm(today),dd(today));
    var eventdtstr = eventsArray[i]["startDate"];
    var eventdate = new Date(yyyy(eventdtstr),mm(eventdtstr),dd(eventdtstr));
    var eventtime = eventdate.getTime()
    var todaytime = todaydate.getTime()
    var timediff = (eventtime - todaytime)/(1000*60*60*24)
    var variab = {
        x: [timediff], //this should be time (days) from now
        y: [lat[i]], //distance from me now
        mode: "markers",
        type: "scatter",
        name: eventsArray[i]["name"],
        text: [eventsArray[i]["startDate"]],
        marker: { size: 12 }
    };
    data[i] = variab
    var layout = { 
        showlegend: false,
        xaxis: {
        range: [ -200, 200 ] 
    },
        yaxis: {
        range: [-0.5, 17.5]
    },
    title:'Events Scatter Plot'
  };
};

//Plotly.newPlot('myDiv', data, layout);