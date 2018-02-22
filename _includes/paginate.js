(function loadPosts(){
  
  function loadMorePosts() {
    var _this = this;
    var $blogContainer = $(".post-list");
    var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
    var totalPages = parseInt($blogContainer.attr("data-totalPages"));
    
    $(this).addClass("loading");
    console.log(nextPage);
    $.get("https://blog.mentorself.com/page" + nextPage, function (data) {
      var htmlData = $.parseHTML(data);
      var $articles = $(htmlData).find(".post-list");
      
      $blogContainer.attr("data-page", nextPage).append($articles);
      
      if ($blogContainer.attr("data-totalPages") == nextPage) {
        $('.loadMore').disabled = true;
        $(".loadMore").remove();
      }
      
      $(_this).removeClass("loading");
    });  

  }

  $(".loadMore").click(loadMorePosts);
})();