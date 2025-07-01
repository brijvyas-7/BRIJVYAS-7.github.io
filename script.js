  $(document).ready(function () {
    $(window).trigger('scroll'); // force scroll check on load
  });

  $(window).on('scroll', function () {
    $('.skill-box, .project-card, .notepad-block').each(function (i) {
      const top = $(this).offset().top;
      const bottom = $(window).scrollTop() + $(window).height();
      if (bottom > top && !$(this).hasClass('visible')) {
        $(this).delay(i * 150).queue(function () {
          $(this).addClass('visible').dequeue();
        });
      }
    });
  });

