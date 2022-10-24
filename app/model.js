var MODEL = (function () {

    var homeContent = `<div class="site-container">
    <section class="home">
        <div class="heroSection">

            <div class="heroTextHolder">
                <div class="heroText">
                    <p class="heroOne">Travel-Fly</p>
                    <p class="heroTwo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Fugiat aliquid minus nemo sed est.</p>
                    <button>READ MORE</button>
                </div>
            </div>
        </div>
            
        <div class="imageSection">
            <div class="imageHolder">
                <div class="image">
                    <div class="text">
                        <p class="imageOne">ISRAEL</p>
                        <p class="imageTwo">from $1000</p>
                        <button>LEARN MORE</button>
                    </div>
                <img src="images/imageOne.jpg" alt=""> 
                </div>
                <div class="image">
                    <div class="text">
                        <p class="imageOne">U.S.A</p>
                        <p class="imageTwo">from $1500</p>
                        <button>LEARN MORE</button>
                    </div>
                <img src="images/imageTwo.jpg" alt=""> 
                </div>
                <div class="image">
                    <div class="text">
                        <p class="imageOne">AUSTRALIA</p>
                        <p class="imageTwo">from $1800</p>
                        <button>LEARN MORE</button>
                    </div>
                <img src="images/imageThree.jpg" alt=""> 
                </div>
            </div>
        </div>
    </section>
    <section class="contact">
        <div class="booking-wrapper">
        <h1>Booking Form</h1>
        <div class="space-input">
            <input type="text" name="name..." id="">
            <input type="text" name="email..." id="">
        </div>
        <div class="space-input">
            <input type="text" name="name..." id="">
            <input type="text" name="email..." id="">
        </div>
        <div class="long-input">
            <label for="cIn">Check-In</label>
            <input type="text">
        </div>
        <div class="long-input">
            <label for="cOut">Check-out</label>
            <input type="text">
        </div>
        <div class="tri-input">
            <div class="left">
                <label for="cOut">Adult</label>
                <input type="text">
            </div>
            <div class="mid">
                <label for="cOut">Adult</label>
                <input type="text">
            </div>
            <div class="right">
                <label for="cOut">Adult</label>
                <input type="text">
            </div>
        </div>
        <div class="textBox">
            <input type="text">
        </div>
        <div class="button">
            <button>SUBMIT</button>
        </div>
        </div>
    </section>

    </div>`;
    var aboutContent = `<div class="containerPos">
    <div class="container">
        <section class="aboutSection">
            <div class="aboutPos">
                <div class="aboutH1">
                    <h1>ABOUT:</h1>
                </div>
                <div class="h1Text">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                </div>
                <div class="aboutH2">
                    <h2>Client Quotes:</h2>
                </div>
                <div class="aboutClient">
                    <div class="clientImage"><img src="images/clientOne.png" alt=""></div>
                    <div class="aboutText">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                    <div class="author"><p> - Miranda Brown </p> </div>
                </div>
                <div class="aboutClient">
                    <div class="clientImage"><img src="images/about-client-02.png" alt=""></div>
                    <div class="aboutText">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </div>
                    <div class="author"> <p> - Johnathan West </p></div>
                </div>
            </div>
        </section>
    </div>
</div>`;
    var toursContent = ` <div class="site-container">

    <div class="toursHeader">
        <p>TOURS:</p>
    </div>


    <div class="toursSec">
        <div class="imageRow">
            <div class="textHolder">
            <div class="text">
                <p class="imageOne">ISRAEL</p>
                <p class="imageTwo">from $1000</p>
                <button> <a id="israel" href="#">LEARN MORE</a></button>
            </div>
            <img src="images/israel.png" alt="">
            </div>
            <div class="textHolder">
                <div class="text">
                    <p class="imageOne">U.S.A</p>
                    <p class="imageTwo">from $1500</p>
                    <button>LEARN MORE</button>
                </div>
                <img src="images/usa.png" alt="">
             </div>
            <div class="textHolder">
                <div class="text">
                    <p class="imageOne">Australia</p>
                    <p class="imageTwo">from $1800</p>
                    <button>LEARN MORE</button>
                </div>
                <img src="images/australia.png" alt="">
            </div>
        </div>
        <div class="imageRow">
            <div class="textHolder">
            <div class="text">
                <p class="imageOne">New Zealand</p>
                <p class="imageTwo">from $1200</p>
                <button>LEARN MORE</button>
            </div>
            <img src="images/newZea.png" alt="">
            </div>
            <div class="textHolder">
                <div class="text">
                    <p class="imageOne">France</p>
                    <p class="imageTwo">from $2500</p>
                    <button>LEARN MORE</button>
                </div>
                <img src="images/france.png" alt="">
             </div>
            <div class="textHolder">
                <div class="text">
                    <p class="imageOne">Egypt</p>
                    <p class="imageTwo">from $800</p>
                    <button>LEARN MORE</button>
                </div>
                <img src="images/israel.png" alt="">
            </div>
        </div>
        <div class="imageRow">
            <div class="textHolder">
            <div class="text">
                <p class="imageOne">Japan</p>
                <p class="imageTwo">from $1300</p>
                <button>LEARN MORE</button>
            </div>
            <img src="images/japan.png" alt="">
            </div>
            <div class="textHolder">
                <div class="text">
                    <p class="imageOne">Canada</p>
                    <p class="imageTwo">from $2000</p>
                    <button>LEARN MORE</button>
                </div>
                <img src="images/canada.png" alt="">
             </div>
            <div class="textHolder">
                <div class="text">
                    <p class="imageOne">U.A.E</p>
                    <p class="imageTwo">from $3000</p>
                    <button>LEARN MORE</button>
                </div>
                <img src="images/uae.png" alt="">
            </div>
        </div>
    </div>
        
    
</div>`;
    var israelContent =` <div class="template-site-container">
        

    <div class="templateHeader">
        <p class="head-left">Israel Tours:</p>
        <p class="head-right">STARTING FROM $1000 (PRICES MAY VARY)</p>
    </div>

    <div class="image-row-template">
        <img src="images/isOne.png" alt="">
        <img src="images/isTwo.png" alt="">
        <img src="images/israel-tour-03.png" alt="">
    </div>

        <div class="templateDays">
            <div class="title">
                <h2>Day #1:</h2>
                </div>
                <div class="para">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                </div>
            <div class="title">
            <h2>Day #2:</h2>
            </div>
            <div class="para">
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="title">
                <h2>Day #3:</h2>
                </div>
                <div class="para">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
                </div>
        </div>        

    <button>BOOK NOW</button>
    
</div>`;
    var specialOffersContent = `<div class="site-container">

    <div class="spec-of-sec">
        
        <h1>SPECIAL OFFER(S)</h1>

        <div class="spec-off-images">
            <div class="left">
                <img src="images/spec-img-one.png" alt="">
            </div>
            <div class="right">
                <h2>Barecelona, Spain</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                <button>Learn More</button>
            </div>
        </div>

        <div class="spec-off-images">
            <div class="left">
                <img src="images/special-offer-02.png" alt="">
            </div>
            <div class="right">
                <h2>Barecelona, Spain</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                <button>Learn More</button>
            </div>
        </div>

    </div>

</div>`;
    var blogContent = `<div class="site-container">

   

    <div class="blog-template-section">

        <h1>BLOG:</h1>
    <div class="wrapper">
        <div class="left">
            <p>06</p>
        </div>

        <div class="right">
            <img src="images/blog-one.png" alt="">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p class="blue">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>

    </div>

    <div class="wrapper">
        <div class="left">
            <p>06</p>
        </div>

        <div class="right">
            <img src="images/blog-one.png" alt="">
            <p>Sed et persipiatis unde omnis iste natus</p>
            <p class="blue">Sed ut per spiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>

    </div>

</div>


    </div>`;

var _changePageContent = function (pageName) {

    let contentName = pageName + "Content";
    $("#app").html(eval(contentName));

};

// Makes the results accesible in app.js
return {

    // makes it seen as updateView
    changePageContent: _changePageContent,

};
})();