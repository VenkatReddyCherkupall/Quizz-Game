
let questions = [
    { 
        id: 1,
        question: "Why do phishing attempts frequently include a link to an external site?",
        answer: "The external site contains malware the phisher wants you to install.",
        options: [
            "The message is too large to fit in a single mail.",
            "These links are easy to create.",
            "The external site contains malware the phisher wants you to install.",
            "Emails must contain a link to be a phishing attempt."
        ]   
        
    },
    {
        id: 2,
        question: "Which of the following is an example of Social breach?",
        answer: "Email claiming to be from a government official requesting PHI.",
        options: [
          "Computer virus installed during software upgrade.",
          "Email claiming to be from a government official requesting PHI.",
          "Employee is stolen keys used for unauthorized entry.",
          "Destruction of data by a disgruntled employee."
        ]
      },
      {
        id: 3,
        question: "Which of the following are true of internal threats?",
        answer: "May not be as obvious as an external threat.",
        options: [
          "May not be as obvious as an external threat.",
          "They typically take longer to detect.",
          "They are not as big a risk as an external threat.",
          "None of these."
        ]
      },
      { id: 4,
        question: "If you see other staff violating privacy policies, you should",
        answer: "Give them a helpful, gentle reminder.",
        options: [
          "Ignore it.",
          "Give them a helpful, gentle reminder.",
          "Allow it",
          "All of the above."
        ]
      },
      {
        id: 5,
        question: "An example of a HIPAA violation and a possible breach of unsecured PHI would be:",
        answer: "All of the above.",
        options: [
          "Accessing the computer to get information.",
          "Releasing a copy of a record to an unauthorized recipient.",
          "Disclosing PHI in a conversation with someone outside of the Health Dept.",
          "All of the above."
        ]
      },
      {
        id: 6,
        question: "Computer passwords are required to be changed:",
        answer: "Every 60 days.",
        options: [
          "Every 40 days.",
          "Every 60 days.",
          "Every 100 days.",
          "Every 120 days.",
        ]
      },
      {
        id: 7,
        question: "Which of the following is NOT a best practice for privacy and security?",
        answer: "Documents containing PHI do not need to be shredded.",
        options: [
          "Keeping fax machines in areas that are not generally accessible.",
          "Keeping consumer records and other documents containing PHI out of sight.",
          "Documents containing PHI do not need to be shredded.",
          "Keeping medical records rooms locked/secured."          
        ]
      },
      {
        id: 8,
        question: "Why is the risk assessment plan is necessary for HIPAA Compliance?",
        answer: "To identify and assess potential risks to the confidentiality, integrity, and availability of ePHI.",
        options: [
          "To identify and assess potential risks to the confidentiality, integrity, and availability of ePHI.",
          "To provide guidelines for employee training on HIPAA regulations.",
          "To establish patient record retention policies.",
          "To monitor patient access to their own medical records."
        ]
      },
      {
        id: 9,
        question: "Which of the following information is generally considered confidential?",
        answer: "All of the above.",
        options: [
          "Demographics.",
          "Diagnosis.",
          "Billing Information.",
          "All of the above."
        ]
      },
      {
        id: 10,
        question: "You receive a call from staff at a local hospital stating that they need information regarding a former client of yours who is scheduled for surgery. They fax you a release of information form that only authorizes the release of medications, but the person on the phone is asking for dates of treatment and diagnoses. How would you respond?",
        answer: "Release information regarding medications only.",
        options: [
          "Tell them everything they need to know because they are calling from a hospital.",
          "Release information regarding medications only.",
          "Refuse to release any information.",
          "None of the above."
          
        ]
      },
      {
        id: 11,
        question: "A visitor who asks for a patient by name may receive the following information EXCEPT",
        answer: "Diagnosis or treatment.",
        options: [
          "Diagnosis or treatment.",
          "Patient's location.",
          "General condition.",
          "Room Number."
          
        ]
      },
      {
        id: 12,
        question: "Why is it important for organizations to prioritize potential risks and vulnerabilities identified during a HIPAA risk assessment?",
        answer: "To help reduce the likelihood of security incidents.",
        options: [
          "To help reduce the likelihood of security incidents.",
          "To comply with federal and state regulations.",
          "To increase patient trust in the organization.",
          "To reduce healthcare costs."
          
        ]
      },
      {
        id: 13,
        question: "What are the potential consequences of a covered entity or business associate failing to implement an effective data backup plan as required by HIPAA?",
        answer: "All of the above.",
        options: [
          "Loss or corruption of Protected Health Information (PHI), leading to breaches of confidentiality and/or integrity.",
          "Fines and penalties from regulatory agencies, such as the Department of Health and Human Services (HHS) or the Office for Civil Rights (OCR).",
          "Disruption of business operations and financial losses due to downtime and data loss.",
          "All of the above."
          
        ]
      },
      {
        id: 14,
        question: "Which of the following statements accurately describes a requirement of the HIPAA Security Rule regarding electronic protected health information (ePHI)?",
        answer: "Technical safeguards under the Security Rule must include mechanisms to encrypt and decrypt ePHI.",
        options: [
          "Covered entities are only required to implement physical safeguards to protect ePHI from unauthorized access or disclosure.",
          "The Security Rule only applies to covered entities that transmit ePHI electronically.",
          "Covered entities must conduct a security risk analysis every five years.",
          "Technical safeguards under the Security Rule must include mechanisms to encrypt and decrypt ePHI."
          
        ]
      },
      {
        id: 15,
        question: "Which of the following statements is true about the relationship between HIPAA and HITECH?",
        answer: "HITECH expands the scope of HIPAA to include business associates and strengthens security requirements.",
        options: [
          "HITECH replaces HIPAA as the primary federal law governing health information privacy and security.",
          "HITECH applies only to business associates of covered entities, while HIPAA applies to covered entities and business associates.",
          "HITECH expands the scope of HIPAA to include business associates and strengthens security requirements.",
          "HIPAA and HITECH are two separate laws with no relationship to each other."
          
        ]
      },
      {
        id: 16,
        question: "What is the best way to prevent HIPAA violations?",
        answer: "All of the above.",
        options: [
          "Training",
          "Incident Response Plan.",
          "Business Associates.",
          "All of the above."
          
        ]
      },
      {
        id: 17,
        question: "Which of the following statements on the difference between business associates and covered entities under HIPAA is correct?",
        answer: "Both covered entities and business associates must abide by the HIPAA Privacy and Security Rules as they are directly governed by this law.",
        options: [
          "Business associates are insurance firms, whereas covered entities are people or organizations that offer healthcare services.",
          "Business associates are subject to indirect HIPAA regulation through agreements with covered entities while covered entities are subject to direct HIPAA regulation.",
          "Business associates are simply required to abide by the HIPAA Security Rule, whereas covered entities must also abide by the HIPAA Privacy Rule.",
          "Both covered entities and business associates must abide by the HIPAA Privacy and Security Rules as they are directly governed by this law."
          
        ]
      },
      {
        id: 18,
        question: "What is the deadline for notifying the Secretary of a breach involving 500 or more individuals and unsecured protected health information if a covered entity discovers one?",
        answer: "Within 60 days of discovering the breach.",
        options: [
          "Within 30 days of discovering the breach.",
          "Within 60 days of discovering the breach.",
          "Within 90 days of discovering the breach.",
          "Suspension of the health care professional's license."
          
        ]
      },
      {
        id: 19,
        question: "What is the potential penalty for a violation of the confidentiality provisions of the Patient Safety Act, as enforced by the OCR?",
        answer: "A civil money penalty of up to $11,000 per violation.",
        options: [
          "A warning letter.",
          "A civil money penalty of up to $11,000 per violation.",
          "A criminal penalty of up to $100,000 per violation.",
          "Suspension of the health care professional's license."
          
        ]
      },
      {
        id: 20,
        question: "What are the consequences for inadequate HIPAA training?",
        answer: "All of the above.",
        options: [
          "HHS can issue a penalty of up to $1.5 million per provision of HIPAA violated.",
          "state attorneys general can enforce HIPAA too. Some state laws require training in HIPAA",
          "Most privacy and security incidents involve human mistakes, training can reduce the risk of having such incidents.",
          "All of the above."
          
        ]
      },
      
      
      
];

let question_count = 0;
let points = 0;


window.onload = function(){
    show(question_count);
};

function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();  
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1 ){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points = points + 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}