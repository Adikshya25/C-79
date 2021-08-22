var name_of_students_array=[];

function submit() {

    var n1= document.getElementById("name1").value;
    var n2= document.getElementById("name2").value;
    var n3= document.getElementById("name3").value;
    var n4= document.getElementById("name4").value;

    name_of_students_array.push(n1);
    name_of_students_array.push(n2);
    name_of_students_array.push(n3);
    name_of_students_array.push(n4);

    console.log(name_of_students_array);

    document.getElementById("display").innerHTML=name_of_students_array;

    document.getElementById("submit_btn").style.display="none";
    document.getElementById("sort_btn").style.display="inline-block";

}

function sorting() {
    name_of_students_array.sort();
    console.log(name_of_students_array);
    document.getElementById("display").innerHTML=name_of_students_array;
}