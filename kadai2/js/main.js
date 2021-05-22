//1.Save クリックイベント
$(function() {

	function timeString(date) {
		return date.getFullYear() + '年' + date.getMonth() + '月' + date.getDate() + '日' + date.getHours() + '時' + date.getMinutes() + '分' + date.getSeconds() + '秒';
	};
	
	if(localStorage.getItem('comment')) {
		$('#commnentList').html(localStorage.getItem('comment'));
	}
	
	$('#post').click(function(){
    for( let i=0; i<10; i++ ){}
		let name = $('<div/>').text($('#name').val()).html();
    if (name===''){
      name='名無しさん'
    }
		let main = $('<div/>').text($('#main').val()).html();
		let posts = $('#commnentList').html();
		posts = '<li>' + name + '：' + timeString(new Date()) + '<br>' + main + '</li>' + posts;
		$('#commnentList').html(posts);
		$('#name').val('');
		localStorage.setItem('comment', $('#commnentList').html());
	});
	
	$('#clear').click(function(){
		$('#commnentList').html('');
		localStorage.removeItem('comment');
	});

});