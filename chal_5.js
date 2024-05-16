
var citations = [ 'Au milieu de toute difficulté se trouve cachée une opportunité. ',
 ' Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera',
 'Les grands accomplissements sont réussis non par la force, mais par la persévérance',
 'Il ne faut pas attendre d\'être parfait pour commencer quelque chose de bien',

];


let cita = document.getElementById('citation')

let index =0 

function affich_cita() {

    cita.innerHTML = citations[index]
    
    index++

    if (index >= citations.length) {

        

      index =0

         
        
    }

   
    
}



