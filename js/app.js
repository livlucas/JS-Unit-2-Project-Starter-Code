/*
  Please add all Javascript code to this file.
  GA JS-SF-7
  Livia Lucas de Medeiros
*/

"use strict";

// var feeds = [ 
//     {
//         title: "Acompanhe Alemanha e Chile",
//         category: "Alemanha empata com o Chile na Copa das Confederações",
//         thumbnail: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg',
//         impressions: '430',
//         description: "A Procuradoria-Geral da República fará três denúncias contra o presidente Michel Temer com base nas delações da JBS. A primeira será por corrupção passiva. A segunda será por obstrução da Justiça e a terceira será por organização criminosa. Serão protocoladas em momentos distintos. A denúncia por corrupção passiva, por estar em fase final de elaboração, será apresentada primeiro. As outras duas ainda requerem diligências.",
//         articleLink: 'http://www.google.com/search?q=Google+tutorial+create+link'
//     },

//     {
//         title: "What is Lorem Ipsum?",
//         category: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
//         thumbnail: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg',
//         impressions: '1430',
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas convallis lacus ut porta. Etiam a lectus ultricies, consequat ex et, vestibulum dui. Sed pulvinar dignissim orci, ac mollis lacus iaculis ut. Morbi viverra ex justo, ut tincidunt erat faucibus eu. Vestibulum volutpat ac arcu non dapibus. Proin semper, elit vitae fermentum sagittis, risus nunc molestie ante, a egestas metus magna lobortis dui. Curabitur sem justo, facilisis in cursus quis, luctus ac nibh. Mauris tincidunt massa erat, eget auctor lacus pharetra non. Donec mi diam, rhoncus convallis tincidunt sed, tristique et nunc. Nam eu elit orci. Cras aliquam, neque a fringilla congue, urna risus iaculis turpis, ut molestie massa massa et lectus. Cras id pulvinar mi. Proin dictum convallis felis. Quisque molestie tellus eu pulvinar scelerisque.",
//         articleLink: 'www.google.com'
//     },

//     {
//         title: "Curabitur aliquet purus id est dapibus?",
//         category: "sports",
//         thumbnail: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg',
//         impressions: '310',
//         description: "ullam sed enim sed arcu molestie congue. Integer ut ultrices nunc, vel euismod justo. Mauris consectetur convallis nibh ac accumsan. Aenean pellentesque venenatis tristique. Maecenas dapibus imperdiet est, et dapibus metus volutpat a. Nulla semper purus id purus hendrerit viverra. Quisque varius, nunc vitae pharetra interdum, libero tellus iaculis nisl, ac maximus dolor est eu neque. Aenean a tortor turpis. Etiam ac turpis a ipsum cursus vehicula eget eu ex.",
//         articleLink: 'http://www.facebook.com'
//     },

//     {
//         title: "Maecenas id libero tincidunt,",
//         category: "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
//         thumbnail: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg',
//         impressions: '1430',
//         description: "endrerit nulla quis, vulputate neque. Pellentesque vitae vestibulum risus, in pretium ante. Duis tempor diam eget maximus iaculis. Maecenas facilisis lacinia leo commodo pretium. In sit amet massa in sem blandit egestas non sit amet ligula. Proin rhoncus rhoncus nisl vitae facilisis. Sed tristique ipsum mattis magna scelerisque, id sollicitudin magna porta. Vestibulum ut blandit erat.",
//         articleLink: 'www.tesla.com'
//     },

//     {
//         title: "Lorem ",
//         category: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
//         thumbnail: 'https://pbs.twimg.com/profile_images/447374371917922304/P4BzupWu.jpeg',
//         impressions: '24',
//         description: "Mauris ut congue mi, ut facilisis nisi. Phasellus interdum suscipit nulla ut euismod. Nam vitae nulla varius, varius dolor quis, faucibus enim. Vestibulum maximus, nibh sit amet rhoncus semper, mi dui volutpat libero, sit amet tristique nunc augue a mauris. Suspendisse consectetur, urna a tincidunt porta, neque elit sollicitudin magna, nec tincidunt leo magna blandit ex. Praesent sed lobortis mi. Duis laoreet purus ac turpis pellentesque dictum. Sed dapibus varius congue. Ut vel ullamcorper nulla. Proin in elementum risus. Vivamus a leo ut diam efficitur faucibus. Nam tincidunt mauris id sem fringilla imperdiet. Vestibulum blandit nibh in diam luctus, a scelerisque sapien fringilla. Curabitur ut nibh eu risus vehicula euismod. Quisque finibus convallis erat at placerat. Mauris gravida aliquam ipsum nec vehicula.",
//         articleLink: 'www.gmail.com'
//     }
// ];

//only structure, empty tree
function generateArticleTreeStructure() {
    var html, $article;

    html = '<article class="article">'
            + '<section class="featuredImage">'
                + '<image src="" alt="">'
            + '</section>'

            + '<section class="articleContent">'
                + '<a href="#"><h3></h3></a>'
                + '<h6></h6>'
            + '</section>'

            + '<section class="impressions"></section>'

            + '<div class="clearfix" />'
         + '</article>';

    $article = $(html);
    return $article;
}

//fill the tree with article data
function generateArticleTree(article) {
    var $article = generateArticleTreeStructure();

    $article.find('.featuredImage img').attr('src', article.thumbnail);
    $article.find('.articleContent h3').text(article.title);
    $article.find('.articleContent h6').text(article.category);
    $article.find('.impressions').text(article.impressions);

    return $article;
}

//get the index of the article clicked
function getArticleIndex($target) {
    var index;

    index = $target.parents('.article').first().index();
    console.log(index);
    
    return index;
} 

function hidePopup() {
    $('#popUp').addClass('closePopUp');
    $('#popUp').addClass('loader hidden');
}

function showPopup() {
    $('#popUp').removeClass('loader hidden');
    $('#popUp').toggleClass('.popUpAction');
}

function renderArticleList(articles, $container) {
    var i;

    $container.empty();
    for (i = 0; i < articles.length; i += 1) {
        $container.append(generateArticleTree(articles[i]));
    }
} 

function renderArticleDetails(article, $container) {
    $container.find('.container h1').text(article.title);
    $container.find('.container p').text(article.description);
    $container.find('.container .popUpAction').attr('href', article.link);
}


$(document).ready(function() {
    var feeds = [];

    //handler to when user clicks on search
    $('#search').on('click', function() {
        $('#search').toggleClass("active");
    });

    //handler to hide popUp when the x is pressed
    $('.closePopUp').on('click', function (e) {
        e.preventDefault();

        hidePopup();
    });

    //handler for when esc is pressed. não tá funcionando da forma que deveria!
    $(document).keydown(function(e) {
        if (e.keyCode == 27) { // escape key maps to keycode `27`
            hidePopup();
        }
    });

    articleApiRequest(nyTimes, function (dataResponse) {
        feeds = feeds.concat(
            parseNYResults(dataResponse)
        );
        renderArticleList(feeds, $('#main'));

        //handler to when user clicks on title and opens article details
        $('.articleContent a').on('click', function(e) {
            var i;

            e.preventDefault();

            i = getArticleIndex($(e.target));

            renderArticleDetails(feeds[i], $('#popUp'));
            showPopup();
        });
    });
});
