BEGIN;


  INSERT INTO admins
    ( name , password , rules)
  VALUES
    ( 'ahmad', 'food', 'admin'),
    ( 'hassan', 'food', 'admin');



  INSERT INTO clients
    ( name , password , mobile_number,facebook_profile,avatar,location,address,favorite)
  VALUES
    ( 'ahmad', 'food', '0599344838', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}'),
    ( 'hassan', 'food', '05999999999', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}'),
    ( 'Jamall', 'food', '0599344838', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}'),
    ( 'Soma', 'food', '05982281', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}'),
    ( 'Mohammed', 'food', '05993548412', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}'),
    ( 'Sameer', 'food', '0599344838', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}'),
    ( 'Anas', 'food', '0599344838', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}'),
    ( 'Nosa', 'food', '0599344838', 'facebook', 'https://cdn4.iconfinder.com/data/icons/cooking-37/64/client-food-restaurant-avatar-512.png', 'gaza', 'al remal alrasheed st', '{"1", "2", "3"}');



  Insert Into  products
    (name,unit,price,image,discount_value,available,category)
  VALUES
    ('صدر دجاج كامل', 'kg', '20',
      'https://scontent.fjrs10-1.fna.fbcdn.net/v/t1.0-9/119063703_3251655401616346_3642705642593528493_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=EYoNsTcsXV8AX8WKRxN&_nc_ht=scontent.fjrs10-1.fna&oh=b7abdace483c8ca01a80350d16aee1e0&oe=5F7F282C'
, 0, true, '{"دجاج"}'),

    ('صدر دجاج مقطع', 'kg', '20',
      'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/119063558_3255093707939182_5190983312251689772_n.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=0BzePRwekr0AX-MktDm&_nc_ht=scontent.fgza2-1.fna&oh=bfb657963c2b8b1f8862efce727597d4&oe=5F7E1515'
, 0, true, '{"دجاج"}'),

    ('دجاج حي', 'kg', '12',
      'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/119099732_3255059607942592_951085378784051792_n.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=J_jcblwemgMAX_Sno81&_nc_ht=scontent.fgza2-1.fna&oh=e7e9928d69052d03034b71d766420008&oe=5F8057C4'
, 0, true, '{"دجاج"}'),

    ('ستيك لحم عجل طازج', 'kg', '40',
      'https://scontent.fgza2-1.fna.fbcdn.net/v/t1.0-9/119096118_3255074301274456_4241548392020449318_n.jpg?_nc_cat=101&_nc_sid=8024bb&_nc_ohc=R6nld4ygfLUAX_fecZx&_nc_ht=scontent.fgza2-1.fna&oh=a28c16896a74e8fb03e3774edb5d7f99&oe=5F80CBDE'
, 0, true, '{"عجل طازج"}');


  Insert Into  orders
    (client_id,total,order_price,address,mobile_number,dilivery_price)
  VALUES
    (1, 50, 45, 'غزة', '05988425', 5),
    (2, 60, 50, 'رفح', '059844545', 10),
    (3, 80, 70, 'خانيونس', '056584254', 10),
    (4, 110, 100, 'جباليا', '056282015', 10),
    (1, 200, 200, 'غزة', '0596585224', 0),
    (1, 80, 70, 'بيت لاهيا', '059955841', 10),
    (5, 60, 50, 'بيت حانون', '05998524', 10),
    (4, 50, 45, 'الساحة', '055854852', 5),
    (3, 60, 55, 'الشيجاعية', '000000000', 5);


  Insert Into  details
    (product_id,quantity,price,Total_price,order_id)
  VALUES
    (1, 2, 20, 40, 1),
    (2, 1, 20, 20, 1),
    (3, 2.5, 12, 30, 1),
    (4, 2, 20, 40, 1),
    (1, 1, 20, 20, 2),
    (1, 3, 20, 60, 3),
    (2, 2, 20, 40, 2),
    (3, 2, 20, 40, 3),
    (2, 2, 20, 40, 3),
    (4, 2, 20, 40, 2),
    (4, 1, 35, 35, 3),
    (2, 2, 20, 40, 4),
    (1, 2.5, 20, 50, 4);


  COMMIT;