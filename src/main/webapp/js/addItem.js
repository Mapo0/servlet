let itemCount = 0;
let priceTotal = 0;
let discont = 0;
let well = 0;

// добавляем
$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).parent().parent().clone().appendTo('#cartItems').append('<button class="removeItem">Убрать</button>');
  $('#cartItems').children('.clother').children('.bar').children('.add').css('display', 'none');

  // считаем сумму
  $('.cost').css('display', 'inline');
  let cost = parseInt($(this).parent().find('.cost').text());
  priceTotal += cost;
  let a =Math.random() * 30 ;
  discont=Math.ceil(priceTotal * (a /100));
  well = priceTotal-discont;

  $('#cost').text("Total: " + well + " Руб" );
  $('#disc').text("disc: " + Math.floor(a) + " %" );
  $('#sale').text("sale: " + discont + " Руб" );
});



// скрыть и показать элементы
$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});

//пустая корзина
$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;
  a=0;
  well=0;
  sale=0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cost').text("Total: " + priceTotal+ " Руб" );
  $('#disc').text("disc: " + Math.floor(a) + " %" );
  $('#sale').text("sale: " + discont + " Руб" );
});



// удалить
$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();
  itemCount --;
  $('#itemCount').text(itemCount);

  // удалить стоймость элемента из общей цены
  let cost = parseInt($(this).parent().children('.bar').children('.cost').text());
  priceTotal -= cost;
  let a =Math.random() * 30 ;
  discont=Math.ceil(priceTotal * (a /100));
  well = priceTotal-discont;
  $('#cost').text("Total: " + well+ " Руб" );
  $('#disc').text("disc: " + Math.floor(a) + " %" );
  $('#sale').text("sale: " + discont + " Руб" );

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});