login.addEventListener("keypress", login_form_handler);
password.addEventListener("keypress", password_form_handler);
buttonSubmit.addEventListener("click", print_arr_onclick);
loginForm.addEventListener("keypress", print_arr_if_enter);

var prev_timestamp = 0;
var login_arr = [];
var password_arr = [];

function print_arr_if_enter(event) {
	event = event || window.event;
    var code = event.which || event.keyCode;
    if(code != 13)
        return;

    print_arr(login_arr, "Login");
    print_arr(password_arr, "Password");
    alert("The result was output to console!");
}

function print_arr_onclick(event) {
	print_arr(login_arr, "Login");
  print_arr(password_arr, "Password");
  alert("The result was output to console!");
}

function print_arr(arr, str) {
	console.log(str);
	arr.forEach(function(item, index, array) {
  		console.log(item, index);
	});
}

function login_form_handler(event) {
	update_array(event, login_arr);
}

function password_form_handler(event) {
	update_array(event, password_arr);
}

function update_array(event, arr) {
	var code = event.which || event.keyCode;
	t = event.timeStamp
	delta_t = t - prev_timestamp;
	prev_timestamp = t;

  if(code == 13)
      return;

  sub_arr = [];
  sub_arr.push(String.fromCharCode(code));
  sub_arr.push(t);
  sub_arr.push(delta_t);
	arr.push(sub_arr);
}
