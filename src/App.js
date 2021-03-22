// Importing Files
import './App.css';
import Navbar from './Components/Navbar/script';
import TopImageSlide from './Components/Top_Image_Slide/script';
import ImageCard from './Components/Image_Card_Container/script';
import Items from './Components/Items_Container/script';
import Footer from './Components/Footer_Container/script';

// Importing Resources
import titleLogo from './Resources/site_logos/flipkart-logo-search-bar-plus.png';

// Importing Resources for top searchbar div
import searchBtn from './Resources/site_logos/search-btn.png';
import cartIcon from './Resources/site_logos/cart.png';

// Importing Resources for More option menu
import notificationBell from './Resources/site_logos/notification-bell-icon.png';
import briefcase from './Resources/site_logos/briefcase-icon.png';
import customerService from './Resources/site_logos/customer-support-icon-2.png';
import advertise from './Resources/site_logos/advertise-icon.png';
import download from './Resources/site_logos/download-icon.png';

// Importing Resources for Login button menu
import profileIcon from './Resources/site_logos/profile-user.png';
import pluseZoneIcon from './Resources/site_logos/plus-zone-icon.png';
import ordersIcon from './Resources/site_logos/orders-icon.png';
import wishlistIcon from './Resources/site_logos/wishlist-icon.png';
import rewardsIcon from './Resources/site_logos/rewards-icon.png';
import giftcardIcon from './Resources/site_logos/gift-card-icon.png';

// Importing Resources for Image Cards
import imageCard1 from './Resources/Image_card_slides/books-stationary-more.png';
import imageCard2 from './Resources/Image_card_slides/deals-on-washing-machines.png';
import imageCard3 from './Resources/Image_card_slides/flipkart-furnitures.png';

// Importing Resources for '2GUD' Cards
import GUDCard1 from './Resources/2-GUD-Slides/2GUD-Bumper-deals-on-gadgets.png';
import GUDCard2 from './Resources/2-GUD-Slides/2GUD-for-truly-wireless-music.png';
import GUDCard3 from './Resources/2-GUD-Slides/2GUD-smooth-multitasking.png';

// Importing Resources for 'Choose From' section image cards
import ChooseImageCard1 from './Resources/Smartphones_choose_image_card/Choose_image_card_1.png';
import ChooseImageCard2 from './Resources/Smartphones_choose_image_card/Choose_image_card_2.png';
import ChooseImageCard3 from './Resources/Smartphones_choose_image_card/Choose_image_card_3.png';
import ChooseImageCard4 from './Resources/Smartphones_choose_image_card/Choose_image_card_4.png';
import ChooseImageCard5 from './Resources/Smartphones_choose_image_card/Choose_image_card_5.jpg';
import ChooseImageCard6 from './Resources/Smartphones_choose_image_card/Choose_image_card_6.jpg';

// Importing Resources for 'Deals of the Day' section
import dealsOfThwDayPic1 from './Resources/Deals_of_the_day/deal-of-the-day-Backpacks.jpeg';
import dealsOfThwDayPic2 from './Resources/Deals_of_the_day/deal-of-the-day-car-bike-accessories.jpg';
import dealsOfThwDayPic3 from './Resources/Deals_of_the_day/deal-of-the-day-cookware-set.jpeg';
import dealsOfThwDayPic4 from './Resources/Deals_of_the_day/deal-of-the-day-makeup-bestsellers.webp';
import dealsOfThwDayPic5 from './Resources/Deals_of_the_day/deal-of-the-day-pressure-cookers.jpeg';
import dealsOfThwDayPic6 from './Resources/Deals_of_the_day/deal-of-the-day-Sarees.jpeg';
import dealsOfThwDayPic7 from './Resources/Deals_of_the_day/deal-of-the-day-trimmers.jpg';
import dealsOfThwDayPic8 from './Resources/Deals_of_the_day/deal-of-the-day-Sports-shoes.jpeg';

// Importing Resources for 'Home Makeover' section
import homeMakeOverPic1 from './Resources/Home_makeovers/home-makeover-hand-blenders.jpeg';
import homeMakeOverPic2 from './Resources/Home_makeovers/home-makeover-office-study-tables.jpeg';
import homeMakeOverPic3 from './Resources/Home_makeovers/home-makeover-philips-led-tvs.jpeg';
import homeMakeOverPic4 from './Resources/Home_makeovers/home-makeover-roti-makers.jpeg';
import homeMakeOverPic5 from './Resources/Home_makeovers/home-makeover-sewing-machines.jpeg';
import homeMakeOverPic6 from './Resources/Home_makeovers/home-makeover-shoe-racks.jpeg';
import homeMakeOverPic7 from './Resources/Home_makeovers/home-makeover-sony-led-tvs.jpeg';
import homeMakeOverPic8 from './Resources/Home_makeovers/home-makeover-trending-smart-tvs.jpeg';

// Importing Resources for 'Best of Appliances' section
import bestOfAppliancesPc1 from './Resources/Best_of_Appliances/best-of-appliances-best-picture-mode-Tvs.jpeg';
import bestOfAppliancesPc2 from './Resources/Best_of_Appliances/best-of-appliances-butterfly-rapid-electric-kettle.jpeg';
import bestOfAppliancesPc3 from './Resources/Best_of_Appliances/best-of-appliances-egg-cooker.jpeg';
import bestOfAppliancesPc4 from './Resources/Best_of_Appliances/best-of-appliances-electric-kettles.jpeg';
import bestOfAppliancesPc5 from './Resources/Best_of_Appliances/best-of-appliances-garment-steam-irons.jpeg';
import bestOfAppliancesPc6 from './Resources/Best_of_Appliances/best-of-appliances-induction-cooktops.jpeg';
import bestOfAppliancesPc7 from './Resources/Best_of_Appliances/best-of-appliances-philips-tv.jpeg';
import bestOfAppliancesPc8 from './Resources/Best_of_Appliances/best-of-appliances-ultra-hd-4k-Tvs.jpeg';

// Importing Resources for 'Best Selling Phones' section
import bestSellingPhonesPics1 from './Resources/Best_selling_phones/best-selling-phones-motorola-edge+.jpeg';
import bestSellingPhonesPics2 from './Resources/Best_selling_phones/best-selling-phones-oppo-reno3-pro.jpeg';
import bestSellingPhonesPics3 from './Resources/Best_selling_phones/best-selling-phones-poco-m2-pro.jpeg';
import bestSellingPhonesPics4 from './Resources/Best_selling_phones/best-selling-phones-poco-x2.jpeg';
import bestSellingPhonesPics5 from './Resources/Best_selling_phones/best-selling-phones-realme-narzo-10a.jpeg';
import bestSellingPhonesPics6 from './Resources/Best_selling_phones/best-selling-phones-samsung-galaxy-a21s.jpeg';
import bestSellingPhonesPics7 from './Resources/Best_selling_phones/best-selling-phones-samsung-galaxy-m11.jpeg';
import bestSellingPhonesPics8 from './Resources/Best_selling_phones/best-selling-phones-samsung-galaxy-s-20-ultra.jpeg';

// Importing Resources for 'Top Deals on Fashion' section
import topDealsOnFashionPics1 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-allen-solly.jpeg';
import topDealsOnFashionPics2 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-baby-girls-dresses.jpeg';
import topDealsOnFashionPics3 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-bangles-bracelets.jpeg';
import topDealsOnFashionPics4 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-jackets-sweatshirts.jpeg';
import topDealsOnFashionPics5 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-naught-ninos.jpeg';
import topDealsOnFashionPics6 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-newly-launched.jpeg';
import topDealsOnFashionPics7 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-puma-wildcraft.jpeg';
import topDealsOnFashionPics8 from './Resources/Top_deals_on_fashion/top-deals-on-fashion-trackpants.jpeg';

// Importing Resources for 'Best of Electronics' section
import bestOfElectronicsPic1 from './Resources/Best_of_Electronics/best-of-electronics-best-brands.jpeg';
import bestOfElectronicsPic2 from './Resources/Best_of_Electronics/best-of-electronics-best-deals-on-trimmers.jpeg';
import bestOfElectronicsPic3 from './Resources/Best_of_Electronics/best-of-electronics-best-of-hearing-aids.jpeg';
import bestOfElectronicsPic4 from './Resources/Best_of_Electronics/best-of-electronics-bluetooth-headphones.jpeg';
import bestOfElectronicsPic5 from './Resources/Best_of_Electronics/best-of-electronics-bluetooth-speakers.jpeg';
import bestOfElectronicsPic6 from './Resources/Best_of_Electronics/best-of-electronics-data-cards.jpeg';
import bestOfElectronicsPic7 from './Resources/Best_of_Electronics/best-of-electronics-webcams.jpeg';
import bestOfElectronicsPic8 from './Resources/Best_of_Electronics/best-of-electronics-wireless-earphones.jpeg';

// Importing Resources for 'Must-Have for Gamers' section
import mustHaveForGamersPic1 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-bean-bags.webp';
import mustHaveForGamersPic2 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-cooling-pads.webp';
import mustHaveForGamersPic3 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-external-hard-disks.webp';
import mustHaveForGamersPic4 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-gamepads.webp';
import mustHaveForGamersPic5 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-gaming-accessories.webp';
import mustHaveForGamersPic6 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-gaming-consoles.webp';
import mustHaveForGamersPic7 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-graphic-cards.webp';
import mustHaveForGamersPic8 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-inflatable-sofas.webp';
import mustHaveForGamersPic9 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-laptops.webp';
import mustHaveForGamersPic10 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-mouse.webp';
import mustHaveForGamersPic11 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-mousepads.webp';
import mustHaveForGamersPic12 from './Resources/Must_haves_for_all_gamers/must-haves-for-all-gamers-routers.webp';

// Importing Navbar icons
import topOffersPic from './Resources/Nav_icon_pics/top-offers.webp';
import groceryPic from './Resources/Nav_icon_pics/grocery.webp';
import mobilesPic from './Resources/Nav_icon_pics/mobiles.webp';
import fashionPic from './Resources/Nav_icon_pics/fashion.webp';
import electronicsPic from './Resources/Nav_icon_pics/electronics.webp';
import homePic from './Resources/Nav_icon_pics/home.webp';
import appliancesPic from './Resources/Nav_icon_pics/appliances.webp';
import travelPic from './Resources/Nav_icon_pics/travel.webp';
import beautyToysMorePic from './Resources/Nav_icon_pics/beauty-toys-more.webp';

// Importing other Resources
import forANewBeginingPic1 from './Resources/For_A_New_Begining_Pic1.png';

function rotate(){
  document.getElementById('arrow').className = "rotate";
}

function reverseRotate(){
  document.getElementById('arrow').className = "rev-rotate";
}

function App() {
  return (
    <div className="main-container">
      <div className="title-logo-searchbar-container">
        <img id="title-logo" src={titleLogo} alt="flipkart logo" width="100px" height="29.6333px"/>
        <div className="input-search-btn-container">
          <div className="search-box-container">
            <input id="search-input-box" type="text" placeholder="Search for products, brands and more"/>
          </div>
          <div className="btn-container">
            <input id="search-btn" type="image" src={searchBtn} alt="search button"/>
          </div>
          <div className="login-more-cart-container">
            <div className="login-btn-container">
              <button id="login-btn">Login</button>
              <div id="loginDropdown" className="login-dropdown-content">
                <div id="new-customer-text">New Customer?<a id="dropdown-sign-up-text" href=""> Sign up</a></div>
                <hr/>
                <a className="a-list-items" href="#my-profile"><img style={{paddingRight: "15px"}} src={profileIcon} alt="" width="16px" height="16px"/>My Profile</a>
                <hr/>
                <a className="a-list-items" href="#flipkart-pluse-zone"><img style={{paddingRight: "15px"}} src={pluseZoneIcon} alt="" width="16px" height="16px"/>Flipkart Pluse Zone</a>
                <hr/>
                <a className="a-list-items" href="#orders"><img style={{paddingRight: "15px"}} src={ordersIcon} alt="" width="16px" height="16px"/>Orders</a>
                <hr/>
                <a className="a-list-items" href="#wishlist"><img style={{paddingRight: "15px"}} src={wishlistIcon} alt="" width="17px" height="17px"/>Wishlist</a>
                <hr/>
                <a className="a-list-items" href="#rewards"><img style={{paddingRight: "15px"}} src={rewardsIcon} alt="" width="17px" height="17px"/>Rewards</a>
                <hr/>
                <a className="a-list-items" href="#gift-cards"><img style={{paddingRight: "15px"}} src={giftcardIcon} alt="" width="17px" height="14px"/>Gift Cards</a>
              </div>
            </div>
            <div className="more-container" onMouseOver={rotate} onMouseOut={reverseRotate}><a className="more-text" id="more-text" href="#more">More<span id="arrow" className="moreArrow">∨</span></a>
              <div id="moreDropdown" className="more-dropdown-content">
                <a href="#notification-preference"><img style={{paddingRight: "15px"}} src={notificationBell} alt="" width="14px" height="16px"/>Notification Preference</a>
                <hr/>
                <a href="#sell-on-flipkart"><img style={{paddingRight: "15px"}} src={briefcase} alt="" width="14px" height="14px"/>Sell on Flipkart</a>
                <hr/>
                <a href="#24x7-customer-care"><img style={{paddingRight: "15px"}} src={customerService} alt="" width="15px" height="15px"/>24x7 Customer Care</a>
                <hr/>
                <a href="#advertise"><img style={{paddingRight: "15px"}} src={advertise} alt="" width="17px" height="15px"/>Advertise</a>
                <hr/>
                <a href="#download-app"><img style={{paddingRight: "15px"}} src={download} alt="" width="14px" height="14px"/>Download App</a>
              </div>
            </div>
            <div className="cart-container"><img id="cart-icon" src={cartIcon} alt="cart icon" width="18px" height="18px"/><a href="#cart">Cart</a></div>
          </div>
        </div>
      </div>
      <Navbar idList={["top-offers-link", "grocery-link", "mobiles-link", "fashion-link", "electronics-link", "home-link", "appliances-link", "travel-link", "beauty-toys-more-link"]} hrefList={["#top-offers", "#grocery", "#mobiles", "#fashion", "#electronics", "#home", "#appliances", "#travel", "#beauty-toys-more"]} navPicList={[topOffersPic, groceryPic, mobilesPic, fashionPic, electronicsPic, homePic, appliancesPic, travelPic, beautyToysMorePic]} navMenuList={["Top Offers", "Grocery", "Mobiles", "Fashion", "Electronics", "Home", "Appliances", "Travel", "Beauty, Toys & More"]}/>
      <div className="content-body-container">
        <TopImageSlide/>
        <div className="dealOfDay_rightImg_container">
          <Items 
            divId={"deals-of-the-day-div"}
            headingText={"Deals of the Day"}
            itemImageCardList={[dealsOfThwDayPic1, dealsOfThwDayPic2, dealsOfThwDayPic3, dealsOfThwDayPic4, dealsOfThwDayPic5, dealsOfThwDayPic6, dealsOfThwDayPic7, dealsOfThwDayPic8]} 
            itemTitleList={["Skybags, Safari, Lavie Bags", "Car & Bike Accessories", "Cookware Sets & more", "Makeup Best Sellers", "Pressure Cooker & more", "Sarees", "Best of Styling", "Nike, ADIDAS, ASICS Shoes"]} 
            itemDescription1List={["Upto 70%+Extra 5% Off", "From ₹99+Extra 10% Off", "From ₹119", "From ₹99+5% Extra Off", "From ₹499", "From ₹299+10% Off", "From ₹349", "Upto 50% Off"]} 
            itemDescription2List={["Backpacks, Suitcase, Handbags", "Top Selling", "New Launches", "Lakme, Maybelline, Sugar", "Pigeon, Prestige & more", "Saara, Divastri & more", "Trimmers, Dryers & more", "Men's Sports Shoes"]}
          />
          <div id="right-img-container" className="right-img-container">
            <img id="right-img" src={forANewBeginingPic1} alt="" />
          </div>
        </div>
        <ImageCard imageCardList={[imageCard1, imageCard2, imageCard3]}/>
        <Items 
          headingText={"Home Makeover"}
          itemImageCardList={[homeMakeOverPic1, homeMakeOverPic2, homeMakeOverPic3, homeMakeOverPic4, homeMakeOverPic5, homeMakeOverPic6, homeMakeOverPic7, homeMakeOverPic8]} 
          itemTitleList={["Hand Blenders", "Office Study Tables", "Philips LED TVs", "Roti Makers", "Sewing Machines", "Shoe Racks", "Sony LED TVs", "Trending Smart TVs"]} 
          itemDescription1List={["From ₹149", "From ₹3,290", "From ₹10,999", "Upto 75% Off", "Shop Now!", "From ₹149", "From ₹14,999", "Upto 65% Off"]} 
          itemDescription2List={["Boss, Orpat & more", "Made In India Brands", "2 Year Brand Warranty", "Prestige, Aiwa & More", "Usha, Singer & more", "Nilkamal, Ebee & more", "Unbelievable Price", "Android | Google Assistant"]}
        />
        <ImageCard imageCardList={[GUDCard1, GUDCard2, GUDCard3]}/>
        <Items 
          headingText={"Best of Appliances"}
          itemImageCardList={[bestOfAppliancesPc1, bestOfAppliancesPc2, bestOfAppliancesPc3, bestOfAppliancesPc4, bestOfAppliancesPc5, bestOfAppliancesPc6, bestOfAppliancesPc7, bestOfAppliancesPc8]} 
          itemTitleList={["Best Picture Mode TVs", "Butterfly Rapid Electric Kettle", "Egg Cookers", "Electric Kettles", "Garment Steam Irons", "Induction Cooktops", "Philips LED TVs", "Ultra HD (4k) Tvs"]} 
          itemDescription1List={["Just from ₹7999", "Shop Now!", "Upto 75% Off", "Upto 75% Off", "Upto 50% Off", "Upto 60% Off", "From ₹10,999", "Upto 60% Off"]} 
          itemDescription2List={["Powerpacked with features", "Grab it At ₹675", "Best Discount!", "Philips, Bajaj & more", "Philips, Usha & more", "Prestige, Philips & more", "2 Years Brand Warranty", "Most Trending Deals"]}
        />
        <ImageCard imageCardList={[ChooseImageCard1, ChooseImageCard2, ChooseImageCard3]}/>
        <Items 
          headingText={"Best selling Phones"}
          itemImageCardList={[bestSellingPhonesPics1, bestSellingPhonesPics2, bestSellingPhonesPics3, bestSellingPhonesPics4, bestSellingPhonesPics5, bestSellingPhonesPics6, bestSellingPhonesPics7, bestSellingPhonesPics8]} 
          itemTitleList={["Motorola Edge+", "OPPO Reno3 Pro", "Poco M2 Pro", "Poco X2", "Realme Narzo 10A", "Samsung Galaxy A21s", "Samsung Galaxy M11", "Samsung Galaxy S20 Ultra"]} 
          itemDescription1List={["108MP Triple Cam", "44+2MP Selfie Cam", "48MP Quad Cam", "4500 mAh Battery", "12+2+2MP Triple Cam", "48MP Quad Cam", "5000 mAh Battery", "108MP Triple Cam"]} 
          itemDescription2List={["Now ₹64,999", "Now ₹24,990", "Now ₹13,999", "Now ₹14,999", "Now ₹8999", "Now ₹14,999", "Now ₹10,998", "Now ₹103,000"]}
        />
        <ImageCard imageCardList={[ChooseImageCard4, ChooseImageCard6, ChooseImageCard5]}/>
        <Items 
          headingText={"Top Deals on Fashion"}
          itemImageCardList={[topDealsOnFashionPics1, topDealsOnFashionPics2, topDealsOnFashionPics3, topDealsOnFashionPics4, topDealsOnFashionPics5, topDealsOnFashionPics6, topDealsOnFashionPics7, topDealsOnFashionPics8]} 
          itemTitleList={["Allen Solly, US Polo", "Baby Girls' Dresses", "Bangles, Bracelets & More", "Jackets, Sweatshirts & more", "Naught Ninos", "Newly Launched", "Puma, Wildcraft", "Track Pants, T-shirts & More"]} 
          itemDescription1List={["60-90% Off", "Min 60% Off", "Under ₹499", "Min 40% Off", "Min 60% Off", "From ₹299", "Min 40% Off", "Under ₹499"]} 
          itemDescription2List={["Casual Pants", "Barbie, Cherokee, Mini Kl..", "Jewels Galaxy, Mansiyao", "Winter is Here!", "Skirts, Tops & more", "Kurtas & Kurtis", "Sweatshirts, Jackets & more", "Grab or Gone"]}
        />
        <Items 
          headingText={"Best of Electronics"}
          itemImageCardList={[bestOfElectronicsPic1, bestOfElectronicsPic2, bestOfElectronicsPic3, bestOfElectronicsPic4, bestOfElectronicsPic5, bestOfElectronicsPic6, bestOfElectronicsPic7, bestOfElectronicsPic8]} 
          itemTitleList={["Best Brands", "Best Deals on Trimmers", "Best of Hearing Aids", "Bluetooth Headphones", "Bluetooth Speakers", "Data Cards", "Webcams", "Wireless Earphones"]} 
          itemDescription1List={["Shop Now", "From ₹895", "From ₹499", "From ₹899", "From ₹799", "Upto 60% Off", "From ₹490", "From ₹899"]} 
          itemDescription2List={["For All Phone Models", "By Philips", "Beurer & more", "JBL, boAt & more", "Music On The Go!", "JioFi, Huawei & more", "Logitech, Quantum & more", "For Work From Home"]}
        />
        <Items 
          headingText={"Must-haves For All Gamers"}
          itemImageCardList={[mustHaveForGamersPic1, mustHaveForGamersPic2, mustHaveForGamersPic3, mustHaveForGamersPic4, mustHaveForGamersPic5, mustHaveForGamersPic6, mustHaveForGamersPic7, mustHaveForGamersPic8, mustHaveForGamersPic9, mustHaveForGamersPic10, mustHaveForGamersPic11, mustHaveForGamersPic12]} 
          itemTitleList={["Bean Bags", "Cooling Pads/Cooling System", "External Hard Disks", "Gamepads", "Gaming Accessories", "Gaming Consoles", "Graphic Cards", "Inflatable Sofas", "Laptops", "Mouse", "Mousepads", "Routers"]} 
          itemDescription1List={["Shop Now!", "Grab Yours", "Explore Now!", "Bestsellers", "Top Picks", "MOst Popular!", "Hot Picks", "Shop Now!", "Most Popular!", "Hurry, Don't Miss Out!", "Top Picks", "Explore Now!"]} 
          itemDescription2List={[]}
        />
      </div>



    <Footer
      sectionTitleList={["about-section", "help-section", "policy-section", "social-section"]}
      titleTextList={["ABOUT", "HELP", "POLICY", "SOCIAL"]}
      section0itemList={["Contact Us", "About Us", "Careers", "Flipkart Stories", "Press", "Flipkart Wholesale"]}
      section1itemList={["Payments", "Shipping", "Cancellation & Returns", "FAQ", "Report Infringement"]}
      section2itemList={["Return Policy", "Terms Of Use", "Security", "Privacy", "Sitemap", "EPR Compliance"]}
      section3itemList={["Facebook", "Twitter", "YouTube"]}
    />

    </div>
  );
}

export default App;
