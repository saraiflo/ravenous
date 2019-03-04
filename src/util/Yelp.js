const apiKey= "kQ-1cNrC-YJIyh1ThEi6ISq7mk9vyiUwOZ8IuMAi5gjP0nzllfImE718eRt0EbhSZNKIJa1d0PPSE_NAdfKzh3KQdVWHS7SDmBlQVfzjX2w11GX4VBX27L2uj_JkXHYx";

const Yelp= {
  searchYelp(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization:`Bearer ${apiKey}`
      },
    }).then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      if(jsonResponse.business){
        return jsonResponse.businesses.map(((business) => {
          console.log(business);
          return {
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
          }
        }));
      }
    })
  }
};

export default Yelp;
