const sign1id = document.getElementById("sign1id");
const sign2id = document.getElementById("sign2id");
const sign3id = document.getElementById("sign3id");
const sign4id = document.getElementById("sign4id");
const sign5id = document.getElementById("sign5id");
const sign6id = document.getElementById("sign6id");
const sign7id = document.getElementById("sign7id");
const sign8id = document.getElementById("sign8id");
const sign9id = document.getElementById("sign9id");
const sign10id = document.getElementById("sign10id");
const sign11id = document.getElementById("sign11id");
const sign12id = document.getElementById("sign12id");
const sign13id = document.getElementById("sign13id");
const sign14id = document.getElementById("sign14id");
const sign15id = document.getElementById("sign15id");
const sign16id = document.getElementById("sign16id");
const sign17id = document.getElementById("sign17id");
const sign18id = document.getElementById("sign18id");
const sign19id = document.getElementById("sign19id");
const sign20id = document.getElementById("sign20id");
const sign21id = document.getElementById("sign21id");
const sign22id = document.getElementById("sign22id");
const sign23id = document.getElementById("sign23id");
const sign24id = document.getElementById("sign24id");
const sign25id = document.getElementById("sign25id");
const sign26id = document.getElementById("sign26id");
const sign27id = document.getElementById("sign27id");
const sign28id = document.getElementById("sign28id");
const sign29id = document.getElementById("sign29id");
const sign30id = document.getElementById("sign30id");
const sign31id = document.getElementById("sign31id");
let sign=document.querySelectorAll(".sign");
let question_container = document.querySelectorAll(".question-container");
let question_container_uwesivroba = document.querySelectorAll(".question-container-uwesivroba"); 
let question_container_mafrtxilebeli= document.querySelectorAll(".question-container-mafrtxilebeli");
let question_container_prioriteti = document.querySelectorAll(".question-container-prioriteti");
let question_container_amkrdzalavi = document.querySelectorAll(".question-container-amkrdzalavi");
let question_container_mimtitebeli = document.querySelectorAll(".question-container-mimtitebeli");
let question_container_sainformacio = document.querySelectorAll(".question-container-sainformacio");
let question_container_servisis =  document.querySelectorAll(".question-container-servisis");
let question_container_damatebiti_informaciis = document.querySelectorAll(".question-container-damatebiti-informaciis");
let question_container_shuqnishnis = document.querySelectorAll(".question-container-shuqnishnis");
let question_container_maregulirebeli = document.querySelectorAll(".question-container-maregulirebeli");
let question_container_specialuri_signali = document.querySelectorAll(".question-container-specialuri-signali");
let question_container_saavario = document.querySelectorAll(".question-container-saavario");
let question_container_sanati_xelsawyoebi  = document.querySelectorAll(".question-container-sanati-xelsawyoebi");
let question_container_modzraoba_manevrireba = document.querySelectorAll(".question-container-modzraoba-manevrireba");
let question_container_gaswreba = document.querySelectorAll(".question-container-gaswreba");
let question_container_modzraobis_sichqare = document.querySelectorAll(".question-container-modzraobis-sichqare");
let question_container_samuxruche = document.querySelectorAll(".question-container-samuxruche");
let question_container_gachereba = document.querySelectorAll(".question-container-gachereba");
let question_container_gzajvaredini = document.querySelectorAll(".question-container-gzajvaredini");
let question_container_rkinigza = document.querySelectorAll(".question-container-rkinigza");
let question_container_avtomagistrali = document.querySelectorAll(".question-container-avtomagistrali");
let question_container_sacxovrebeli = document.querySelectorAll(".question-container-sacxovrebeli");
let question_container_buqsireba = document.querySelectorAll(".question-container-buqsireba");
let question_container_saswavlo = document.querySelectorAll(".question-container-saswavlo");
let question_container_gadazidvebi = document.querySelectorAll(".question-container-gadazidvebi");
let question_container_velosipedi = document.querySelectorAll(".question-container-velosipedi");
let question_container_sagzao_monishvna = document.querySelectorAll(".question-container-sagzao-monishvna");
let question_container_sagzao_samedicino = document.querySelectorAll(".question-container-sagzao-samedicino");
let question_container_usafrtxoeba = document.querySelectorAll(".question-container-usafrtxoeba");
let question_container_eko = document.querySelectorAll(".question-container-eko");
let ticket_id_p=document.querySelectorAll(".ticket-id-p");

function hideAll(){
    document.querySelectorAll(`
        .question-container,
        .question-container-uwesivroba,
        .question-container-mafrtxilebeli,
        .question-container-prioriteti,
        .question-container-amkrdzalavi,
        .question-container-mimtitebeli,
        .question-container-sainformacio,
        .question-container-servisis,
        .question-container-damatebiti-informaciis,
        .question-container-shuqnishnis,
        .question-container-maregulirebeli,
        .question-container-specialuri-signali,
        .question-container-saavario,
        .question-container-sanati-xelsawyoebi,
        .question-container-modzraoba-manevrireba,
        .question-container-gaswreba,
        .question-container-modzraobis-sichqare,
        .question-container-samuxruche,
        .question-container-gachereba,
        .question-container-gzajvaredini,
        .question-container-rkinigza,
        .question-container-avtomagistrali,
        .question-container-sacxovrebeli,
        .question-container-buqsireba,
        .question-container-saswavlo,
        .question-container-gadazidvebi,
        .question-container-velosipedi,
        .question-container-sagzao-monishvna,
        .question-container-sagzao-samedicino,
        .question-container-usafrtxoeba,
        .question-container-eko
    `).forEach(el => el.classList.remove("show"));
}


sign.forEach(el => {
    el.addEventListener("click", () => {
        sign.forEach(x => x.classList.remove("active1"));
        el.classList.add("active1");
    });

});

window.addEventListener("DOMContentLoaded", () => {
    hideAll();
    question_container.forEach(el => el.classList.add("show"));
});

sign1id.addEventListener("click", () => {
    hideAll();
    question_container.forEach(el => el.classList.add("show"));
});

sign2id.addEventListener("click", () => {
    hideAll();
    question_container_uwesivroba.forEach(el => el.classList.add("show"));
});

sign3id.addEventListener("click", () => {
    hideAll();
    question_container_mafrtxilebeli.forEach(el => el.classList.add("show"));
});

sign4id.addEventListener("click", () => {
    hideAll();
    question_container_prioriteti.forEach(el => el.classList.add("show"));
});

sign5id.addEventListener("click", () => {
    hideAll();
    question_container_amkrdzalavi.forEach(el => el.classList.add("show"));
    
});

sign6id.addEventListener("click", () => {
    hideAll();
    question_container_mimtitebeli.forEach(el => el.classList.add("show"));
    
});
sign7id.addEventListener("click", () => {
    hideAll();
    question_container_sainformacio.forEach(el => el.classList.add("show"));
});
sign8id.addEventListener("click", () => {
    hideAll();
    question_container_servisis.forEach(el => el.classList.add("show"));

});
sign9id.addEventListener("click", () => {
    hideAll();
    question_container_damatebiti_informaciis.forEach(el => el.classList.add("show"));
});
sign10id.addEventListener("click", () => {
    hideAll();
    question_container_shuqnishnis.forEach(el => el.classList.add("show"));
});
sign11id.addEventListener("click", () => {
    hideAll();
    question_container_maregulirebeli.forEach(el => el.classList.add("show"));
});
sign12id.addEventListener("click", () => {
    hideAll();
    question_container_specialuri_signali.forEach(el => el.classList.add("show"));
});
sign13id.addEventListener("click", () => {
    hideAll();
    question_container_saavario.forEach(el => el.classList.add("show"));
});
sign14id.addEventListener("click", () => {
    hideAll();
    question_container_sanati_xelsawyoebi.forEach(el => el.classList.add("show"));
});
sign15id.addEventListener("click", () => {
    hideAll();
    question_container_modzraoba_manevrireba.forEach(el => el.classList.add("show"));
});
sign16id.addEventListener("click", () => {
    hideAll();
    question_container_gaswreba.forEach(el => el.classList.add("show"));
});
sign17id.addEventListener("click", () => {
    hideAll();
    question_container_modzraobis_sichqare.forEach(el => el.classList.add("show"));
});
sign18id.addEventListener("click", () => {
    hideAll();
    question_container_samuxruche.forEach(el => el.classList.add("show"));
});
sign19id.addEventListener("click", () => {
    hideAll();
    question_container_gachereba.forEach(el => el.classList.add("show"));
});
sign20id.addEventListener("click", () => {
    hideAll();
    question_container_gzajvaredini.forEach(el => el.classList.add("show"));
});
sign21id.addEventListener("click", () => {
    hideAll();
    question_container_rkinigza.forEach(el => el.classList.add("show"));
});
sign22id.addEventListener("click", () => {
    hideAll();
    question_container_avtomagistrali.forEach(el => el.classList.add("show"));
});
sign23id.addEventListener("click", () => {
    hideAll();
    question_container_sacxovrebeli.forEach(el => el.classList.add("show"));
});
sign24id.addEventListener("click", () => {
    hideAll();
    question_container_buqsireba.forEach(el => el.classList.add("show"));
});
sign25id.addEventListener("click", () => {
    hideAll();
    question_container_saswavlo.forEach(el => el.classList.add("show"));
});
sign26id.addEventListener("click", () => {
    hideAll();
    question_container_gadazidvebi.forEach(el => el.classList.add("show"));
});
sign27id.addEventListener("click", () => {
    hideAll();
    question_container_velosipedi.forEach(el => el.classList.add("show"));
});
sign28id.addEventListener("click", () => {
    hideAll();
    question_container_sagzao_monishvna.forEach(el => el.classList.add("show"));
});
sign29id.addEventListener("click", () => {
    hideAll();
    question_container_sagzao_samedicino.forEach(el => el.classList.add("show"));
});
sign30id.addEventListener("click", () => {
    hideAll();
    question_container_usafrtxoeba.forEach(el => el.classList.add("show"));
});
sign31id.addEventListener("click", () => {
    hideAll();
    question_container_eko.forEach(el => el.classList.add("show"));
});





question_container.forEach(question_container => {
  let correct = Number(question_container.dataset.correct); // index 0-დან

  let answers = question_container.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container.classList.contains("active")) {
      question_container.classList.remove("active");
    } else {
      question_container.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_uwesivroba.forEach(question_container_uwesivroba => {
  let correct = Number(question_container_uwesivroba.dataset.correct); // index 0-დან

  let answers = question_container_uwesivroba.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_uwesivroba.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_uwesivroba.classList.contains("active")) {
      question_container_uwesivroba.classList.remove("active");
    } else {
      question_container_uwesivroba.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_mafrtxilebeli.forEach(question_container_mafrtxilebeli => {
  let correct = Number(question_container_mafrtxilebeli.dataset.correct); // index 0-დან

  let answers = question_container_mafrtxilebeli.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_mafrtxilebeli.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_mafrtxilebeli.classList.contains("active")) {
      question_container_mafrtxilebeli.classList.remove("active");
    } else {
      question_container_mafrtxilebeli.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_prioriteti.forEach(question_container_prioriteti => {
  let correct = Number(question_container_prioriteti.dataset.correct); // index 0-დან

  let answers = question_container_prioriteti.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_prioriteti.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_prioriteti.classList.contains("active")) {
      question_container_prioriteti.classList.remove("active");
    } else {
      question_container_prioriteti.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_amkrdzalavi.forEach(question_container_amkrdzalavi => {
  let correct = Number(question_container_amkrdzalavi.dataset.correct); // index 0-დან

  let answers = question_container_amkrdzalavi.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_amkrdzalavi.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_amkrdzalavi.classList.contains("active")) {
      question_container_amkrdzalavi.classList.remove("active");
    } else {
      question_container_amkrdzalavi.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_mimtitebeli.forEach(question_container_mimtitebeli => {
  let correct = Number(question_container_mimtitebeli.dataset.correct); // index 0-დან

  let answers = question_container_mimtitebeli.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_mimtitebeli.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_mimtitebeli.classList.contains("active")) {
      question_container_mimtitebeli.classList.remove("active");
    } else {
      question_container_mimtitebeli.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_sainformacio.forEach(question_container_sainformacio => {
  let correct = Number(question_container_sainformacio.dataset.correct); // index 0-დან

  let answers = question_container_sainformacio.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_sainformacio.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_sainformacio.classList.contains("active")) {
      question_container_sainformacio.classList.remove("active");
    } else {
      question_container_sainformacio.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_servisis.forEach(question_container_servisis => {
  let correct = Number(question_container_servisis.dataset.correct); // index 0-დან

  let answers = question_container_servisis.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_servisis.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_servisis.classList.contains("active")) {
      question_container_servisis.classList.remove("active");
    } else {
      question_container_servisis.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_damatebiti_informaciis.forEach(question_container_damatebiti_informaciis => {
  let correct = Number(question_container_damatebiti_informaciis.dataset.correct); // index 0-დან

  let answers = question_container_damatebiti_informaciis.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_damatebiti_informaciis.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_damatebiti_informaciis.classList.contains("active")) {
      question_container_damatebiti_informaciis.classList.remove("active");
    } else {
      question_container_damatebiti_informaciis.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_shuqnishnis.forEach(question_container_shuqnishnis => {
  let correct = Number(question_container_shuqnishnis.dataset.correct); // index 0-დან

  let answers = question_container_shuqnishnis.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_shuqnishnis.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_shuqnishnis.classList.contains("active")) {
      question_container_shuqnishnis.classList.remove("active");
    } else {
      question_container_shuqnishnis.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_maregulirebeli.forEach(question_container_maregulirebeli =>{
  let correct = Number(question_container_maregulirebeli.dataset.correct);
  let answers = question_container_maregulirebeli.querySelectorAll(".answer-box");
  let answered = false;
  let btn = question_container_maregulirebeli.querySelector(".ticket-id-img");
  btn.addEventListener("click",(e)=>{
    e.stopPropagation();
  if(question_container_maregulirebeli.classList.contains("active")){
    question_container_maregulirebeli.classList.remove("active");
  }else{
    question_container_maregulirebeli.classList.add("active");
  }
});
answers.forEach((answer,idx)=>{
  answer.addEventListener("click",()=>{
    if(answered) return;
    if(answer.textContent.trim()==="") return;
    if(idx === correct){
      answer.style.background="green";
    }else{
      answer.style.background="red";
      answer[correct].style.background="green";
    }
    answered=true;
  })
})
  });

  question_container_specialuri_signali.forEach(question_container_specialuri_signali => {
  let correct = Number(question_container_specialuri_signali.dataset.correct); // index 0-დან

  let answers = question_container_specialuri_signali.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_specialuri_signali.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_specialuri_signali.classList.contains("active")) {
      question_container_specialuri_signali.classList.remove("active");
    } else {
      question_container_specialuri_signali.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

  question_container_saavario.forEach(question_container_saavario => {
  let correct = Number(question_container_saavario.dataset.correct); // index 0-დან

  let answers = question_container_saavario.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_saavario.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_saavario.classList.contains("active")) {
      question_container_saavario.classList.remove("active");
    } else {
      question_container_saavario.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

  question_container_sanati_xelsawyoebi.forEach(question_container_sanati_xelsawyoebi => {
  let correct = Number(question_container_sanati_xelsawyoebi.dataset.correct); // index 0-დან

  let answers = question_container_sanati_xelsawyoebi.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_sanati_xelsawyoebi.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_sanati_xelsawyoebi.classList.contains("active")) {
      question_container_sanati_xelsawyoebi.classList.remove("active");
    } else {
      question_container_sanati_xelsawyoebi.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_modzraoba_manevrireba.forEach(question_container_modzraoba_manevrireba => {
  let correct = Number(question_container_modzraoba_manevrireba.dataset.correct); // index 0-დან

  let answers = question_container_modzraoba_manevrireba.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_modzraoba_manevrireba.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_modzraoba_manevrireba.classList.contains("active")) {
      question_container_modzraoba_manevrireba.classList.remove("active");
    } else {
      question_container_modzraoba_manevrireba.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_gaswreba.forEach(question_container_gaswreba => {
  let correct = Number(question_container_gaswreba.dataset.correct); // index 0-დან

  let answers = question_container_gaswreba.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_gaswreba.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_gaswreba.classList.contains("active")) {
      question_container_gaswreba.classList.remove("active");
    } else {
      question_container_gaswreba.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_modzraobis_sichqare.forEach(question_container_modzraobis_sichqare => {
  let correct = Number(question_container_modzraobis_sichqare.dataset.correct); // index 0-დან

  let answers = question_container_modzraobis_sichqare.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_modzraobis_sichqare.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_modzraobis_sichqare.classList.contains("active")) {
      question_container_modzraobis_sichqare.classList.remove("active");
    } else {
      question_container_modzraobis_sichqare.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_samuxruche.forEach(question_container_samuxruche => {
  let correct = Number(question_container_samuxruche.dataset.correct); // index 0-დან

  let answers = question_container_samuxruche.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_samuxruche.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_samuxruche.classList.contains("active")) {
      question_container_samuxruche.classList.remove("active");
    } else {
      question_container_samuxruche.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_gachereba.forEach(question_container_gachereba => {
  let correct = Number(question_container_gachereba.dataset.correct); // index 0-დან

  let answers = question_container_gachereba.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_gachereba.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_gachereba.classList.contains("active")) {
      question_container_gachereba.classList.remove("active");
    } else {
      question_container_gachereba.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_gzajvaredini.forEach(question_container_gzajvaredini => {
  let correct = Number(question_container_gzajvaredini.dataset.correct); // index 0-დან

  let answers = question_container_gzajvaredini.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_gzajvaredini.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_gzajvaredini.classList.contains("active")) {
      question_container_gzajvaredini.classList.remove("active");
    } else {
      question_container_gzajvaredini.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_rkinigza.forEach(question_container_rkinigza => {
  let correct = Number(question_container_rkinigza.dataset.correct); // index 0-დან

  let answers = question_container_rkinigza.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_rkinigza.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_rkinigza.classList.contains("active")) {
      question_container_rkinigza.classList.remove("active");
    } else {
      question_container_rkinigza.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_avtomagistrali.forEach(question_container_avtomagistrali => {
  let correct = Number(question_container_avtomagistrali.dataset.correct); // index 0-დან

  let answers = question_container_avtomagistrali.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_avtomagistrali.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_avtomagistrali.classList.contains("active")) {
      question_container_avtomagistrali.classList.remove("active");
    } else {
      question_container_avtomagistrali.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_sacxovrebeli.forEach(question_container_sacxovrebeli => {
  let correct = Number(question_container_sacxovrebeli.dataset.correct); // index 0-დან

  let answers = question_container_sacxovrebeli.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_sacxovrebeli.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_sacxovrebeli.classList.contains("active")) {
      question_container_sacxovrebeli.classList.remove("active");
    } else {
      question_container_sacxovrebeli.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_buqsireba.forEach(question_container_buqsireba => {
  let correct = Number(question_container_buqsireba.dataset.correct); // index 0-დან

  let answers = question_container_buqsireba.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_buqsireba.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_buqsireba.classList.contains("active")) {
      question_container_buqsireba.classList.remove("active");
    } else {
      question_container_buqsireba.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_saswavlo.forEach(question_container_saswavlo => {
  let correct = Number(question_container_saswavlo.dataset.correct); // index 0-დან

  let answers = question_container_saswavlo.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_saswavlo.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_saswavlo.classList.contains("active")) {
      question_container_saswavlo.classList.remove("active");
    } else {
      question_container_saswavlo.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_gadazidvebi.forEach(question_container_gadazidvebi => {
  let correct = Number(question_container_gadazidvebi.dataset.correct); // index 0-დან

  let answers = question_container_gadazidvebi.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_gadazidvebi.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_gadazidvebi.classList.contains("active")) {
      question_container_gadazidvebi.classList.remove("active");
    } else {
      question_container_gadazidvebi.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_velosipedi.forEach(question_container_velosipedi => {
  let correct = Number(question_container_velosipedi.dataset.correct); // index 0-დან

  let answers = question_container_velosipedi.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_velosipedi.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_velosipedi.classList.contains("active")) {
      question_container_velosipedi.classList.remove("active");
    } else {
      question_container_velosipedi.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_sagzao_monishvna.forEach(question_container_sagzao_monishvna => {
  let correct = Number(question_container_sagzao_monishvna.dataset.correct); // index 0-დან

  let answers = question_container_sagzao_monishvna.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_sagzao_monishvna.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_sagzao_monishvna.classList.contains("active")) {
      question_container_sagzao_monishvna.classList.remove("active");
    } else {
      question_container_sagzao_monishvna.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_sagzao_samedicino.forEach(question_container_sagzao_samedicino => {
  let correct = Number(question_container_sagzao_samedicino.dataset.correct); // index 0-დან

  let answers = question_container_sagzao_samedicino.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_sagzao_samedicino.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_sagzao_samedicino.classList.contains("active")) {
      question_container_sagzao_samedicino.classList.remove("active");
    } else {
      question_container_sagzao_samedicino.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_usafrtxoeba.forEach(question_container_usafrtxoeba => {
  let correct = Number(question_container_usafrtxoeba.dataset.correct); // index 0-დან

  let answers = question_container_usafrtxoeba.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_usafrtxoeba.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_usafrtxoeba.classList.contains("active")) {
      question_container_usafrtxoeba.classList.remove("active");
    } else {
      question_container_usafrtxoeba.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});

question_container_eko.forEach(question_container_eko => {
  let correct = Number(question_container_eko.dataset.correct); // index 0-დან

  let answers = question_container_eko.querySelectorAll(".answer-box");
  let answered=false;
   let btn = question_container_eko.querySelector(".ticket-id-img");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    // toggle active
    if (question_container_eko.classList.contains("active")) {
      question_container_eko.classList.remove("active");
    } else {
      question_container_eko.classList.add("active");
    }
  });
  answers.forEach((answer, idx) => {
    answer.addEventListener("click", () => {
        if(answered) return;
        if(answer.textContent.trim()==="") return;
      if (idx === correct) {
        answer.style.background = "green"; // სწორი
      } else {
        answer.style.background = "red";   // არასწორი
        answers[correct].style.background = "green"; // correct გამოჩნდეს
      }
      answered=true;
    });
  });
});