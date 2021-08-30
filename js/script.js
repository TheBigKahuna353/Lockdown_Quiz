document.getElementById('date').innerHTML = new Date().toDateString();


async function read_data() {
    var xml = new XMLHttpRequest()
    xml.onerror = function(e) {
        console.log(e)
    }
    xml.onload = setup_questions
    xml.open("GET", "https://github.com/TheBigKahuna353/Lockdown_Quiz/blob/main/q_data.txt");
    xml.send();
    
}

function setup_questions(e) {

    contents = this.responseText;
    console.log("contents: " + contents.toString());

    for (var i =0; i <= contents.length; i++) {
        var div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = "Question " + (i+1).toString()
        div.id = 'question'
        q_data_div = document.createElement('div')
        div.appendChild(q_data_div)
        q_data_div.textContent = contents[i]
        q_data_div.id = 'question_data'
    }
}

read_data();