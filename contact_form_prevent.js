$( "#contactForm" ).submit(function(ev){
  ev.preventDefault();

  $.post({
    url:"https://formspree.io/{{ with .Site.Params.email }}{{.}}{{ end }}",
    data: {
      message: "hello!"
    },
    dataType: "json"
  });
});
