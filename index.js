const target = document.querySelector(".feature_wrapper");



// const observerFeature = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       console.log(entry);
//       if (entry.isIntersecting === true) {
//         // Add the animation class
//         entry.target.classList.add('animate_up');
//       } 
//     });
//   });
  
//   // Tell the observer which elements to track
//   observerFeature.observe(document.querySelector('.feature_wrapper'));



  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.heading_secondary');
      const about = entry.target.querySelector('.container');

      if (entry.isIntersecting) {
        square.classList.add('animate_up');
        about.classList.add('animate_up');


      return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate_up');
      about.classList.remove('animate_up');

    });
  });
  
  observer.observe(document.querySelector('.about_content'));


  const observerFeatures = new IntersectionObserver(entries => {
    entries.forEach(entry => {


      if (entry.isIntersecting) {
        target.classList.add('animate_up');
        targetTours.classList.add('animate_up');

      return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      target.classList.remove('animate_up');
      targetTours.classList.remove('animate_up');


    });
  });
  
  observerFeatures.observe(document.querySelector('.section_feaures'));



  const targetTours = document.querySelector(".animation_wrapper_tours");
  
  const observerTours = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {

        targetTours.classList.add('animate_up');

      return;
      }
  
      targetTours.classList.remove('animate_up');


    });
  });

  observerTours.observe(document.querySelector('.section_tours'));
