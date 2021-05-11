function clickTitle(titleId){
    var correctH2 = document.getElementById(titleId);
    correctH2.scrollIntoView({behavior:"smooth"});
}


function addH2Class (){
    var topicH2 = document.getElementsByTagName("H2");
    topicH2.className += "topicH2";


}
