export const returnCard = (imagePath, imageExtension, title, description) => {
    return `
        <div class="card">
            <div class="card__header">
            <img src=${imagePath.includes('image_not_available')
            ? 'https://image.api.playstation.com/vulcan/img/rnd/202111/1814/n7UmKNPcZKKZNb8J1PxPWgsa.jpg'
            : imagePath + "." + imageExtension} 
alt="card__image" class="card__image" width="600" height="300">
</div>
<div class="card__body">
  <span class="tag tag-blue">Comic</span>
  <h4>${title}</h4>
  <p>${!description ? 'No description available.' : description}</p>
</div>
<!--
<div class="card__footer">
  <div class="user">
    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image">
    <div class="user__info">
      <h5>Jane Doe</h5>
      <small>2h ago</small>
    </div>
  </div> -->
</div>
</div>       `
};