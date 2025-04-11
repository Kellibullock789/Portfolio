function stageOfLife(){

    var userName = prompt('What is your name?')
    var birthYear = prompt('When were you born?(year)')
    var currentYear = prompt('What is the year of today?')
    var stage = Number(currentYear-birthYear)
    
    var lifeStage;
      if (stage>130){lifeStage='Likely a Corpse'}
      else if (stage>80){lifeStage='Ancient'}
      else if (stage>65){lifeStage='Senior'}
      else if (stage>50){lifeStage='Middle-aged'}
      else if (stage>25){lifeStage='Adult'}
      else if (stage>20){lifeStage='Young Adult'}
      else if (stage>13){lifeStage='Teenager'}
      else if (stage>11){lifeStage='Preteen'}
      else if (stage>5){lifeStage='Child'}
      else if (stage>3){lifeStage='Toddler'}
      else if (stage>1){lifeStage='Infant'}
      else if (stage<1){lifeStage='Newborn.'}
      else{'use numbers'}

      document.write(userName+' is '+stage+' years old.<br>'+lifeStage)
    }
      stageOfLife()