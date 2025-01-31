/** @format */

import exp from 'constants';

const Blogbody_img = () => {
  const bodyimg = [
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-500x500.jpg',
      name: 'Unleash Your Inner Style Icon',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a...',
      collec: 'Beauty',
      style: 'Collection',
    },

    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-1-1-500x500.jpg',
      name: 'Her Style Choice',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a....',
      collec: 'Accessories',
      style: 'Collection',
    },
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-3.jpg',
      name: 'Luxury Made Affordable',
      date: 'January 23, 2024',
      about:
        'Our goal has always been to motivate, encourage and release our fellow creatives to do their thing Sed a...',
      collec: 'Fashion Tips',
      style: '',
    },
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-4.jpg',
      name: 'Post format video blogs',
      date: 'January 23, 2024',
      about:
        'Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas...',
      collec: 'Beauty',
      style: '',
    },
    {
      imgs: 'https://bemins.wpbingosite.com/wp-content/uploads/2023/01/blog-5.jpg',
      name: 'Post format audio blogs',
      date: 'January 23, 2024',
      about:
        'Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac bibendum mi mi eget libero. Maecenas...',
      collec: 'Life Style',
      style: 'Uncategorizes',
    },
  ];
  return (
    <div>
      <ul>
        {bodyimg.map((item) => (
          <li key={item}>
            <div>
              <img src={item.imgs} alt={item.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogbody_img;
