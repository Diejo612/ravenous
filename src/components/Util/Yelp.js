const apiKey = 'Rb-WHRPmznjp30hFar_722YlTF0iqoKCvRfxSr0K3ZXiK9VajpK6GLj_igfrkjUj4akZpWsjjbpI6PGx8W5kdufjMWMvF02okKV8MkD3yMwqVAwc5J_Mghgv7Tg5YXYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then( response => response.json()).then( jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                  }));
            }
        });
    }
};

export default Yelp;