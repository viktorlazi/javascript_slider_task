const controlsGap = 100

$('#go_right').click(()=>{
  $('#row1 > img').css('marginRight', 0)

  const firstInRow1 = $('#row1 > img:first')
  const firstInRow2 = $('#row2 > img:first')

  firstInRow1.animate({marginRight: -firstInRow1.width()}, 1000, ()=>{
  })
  firstInRow2.animate({marginRight: -firstInRow2.width() + controlsGap + 'px'}, 1000, ()=>{
    firstInRow1.appendTo('#row2')
    firstInRow2.appendTo('#row1')
    firstInRow1.css('marginRight', 0)
    firstInRow2.css('marginRight', 0)
  })  
  
  
})
$('#go_left').click(()=>{
  $('#row2 > img').css('marginRight', 0)


  //before shift  
  const lastInRow1 = $('#row1 > img:last-child')
  const lastInRow2 = $('#row2 > img:last-child')

  lastInRow1.insertAfter('#slider-controls')
  lastInRow2.prependTo('#row1')

  // after shift
  const firstInRow1 = $('#row1 > img:first')
  const firstInRow2 = $('#row2 > img:first')
  
  firstInRow1.css('marginRight', -firstInRow1.width())
  firstInRow1.animate({marginRight: '0'}, 1000)
  firstInRow2.css('marginRight',-firstInRow2.width() + controlsGap + 'px')
  firstInRow2.animate({marginRight: controlsGap + 'px'}, 1000)  
})