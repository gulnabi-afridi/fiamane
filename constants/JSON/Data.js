const Data = {
  TopNavigation: {
    NavItems: [
      {
        Name: 'Navbar.Links.FindTransporter', //Find a carrier
        Route: '/',
      },
      {
        Name: 'Navbar.Links.Yearly', //Phone book
        Route: '/annuaire',
      },
      {
        Name: 'Navbar.Links.TrackAnItem', //Track a package
        Route: '',
      },
      {
        Name: 'Navbar.Links.FiamaneCompany', //Fiamane company
        Route: '',
      },
    ],
  },
  LeftNavigation: {
    NavItems: [
      {
        Name: 'AppSideBar.MyOffers',
        Route: '/offer',
      },
      {
        Name: 'AppSideBar.MyDeparatures',
        Route: '/departure',
      },
      {
        Name: 'AppSideBar.MyQuotations',
        Route: '/my-quote',
      },
      {
        Name: 'AppSideBar.MyProfile',
        Route: '/profile',
      },
      {
        Name: 'AppSideBar.MyBookmars',
        Route: '/favorite',
      },
      {
        Name: 'AppSideBar.Settings',
        Route: '/settings',
      },
    ],
  },
  FindCarrier: {
    OfferData: [
      {
        id: '1',
        SenderName: 'Youssouf Serhane',
        SenderPic: '/Assets/OfferDetails.png',
        SenderPlace: 'Madrid',
        ReciverPlace: 'Tanger',
        Description:
          'Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.',
        Weight: '5kg',
        Dimension: '20 x 20 x 80 cm',
        Title: 'Bagages',
        Image: '/Assets/Bags.png',
        Address: 'De Madrid à Tanger',
        Date: 'Date prévue d’envoi vendredi, 09 Dec',
      },
      {
        id: '2',
        SenderName: 'Malik B',
        SenderPic: '/Assets/OfferDetails.png',
        SenderPlace: 'Madrid',
        ReciverPlace: 'Tanger',
        Description:
          'Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.',
        Weight: '5kg',
        Dimension: '20 x 20 x 80 cm',
        Title: 'Carton',
        Date: 'Date prévue d’envoi vendredi, 09 Dec',
        Image: '/Assets/Carton.png',
        Address: 'De Madrid à Tanger',
      },
      {
        id: '3',
        SenderName: 'Malik C',
        SenderPic: '/Assets/OfferDetails.png',
        SenderPlace: 'Madrid',
        ReciverPlace: 'Tanger',
        Description:
          'Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.',
        Weight: '5kg',
        Dimension: '20 x 20 x 80 cm',
        Title: 'Bagages',
        Image: '/Assets/Nopicture.png',
        Address: 'De Madrid à Tanger',
        Date: 'Date prévue d’envoi vendredi, 09 Dec',
      },
      {
        id: '4',
        SenderName: 'Malik D',
        SenderPic: '/Assets/OfferDetails.png',
        SenderPlace: 'Madrid',
        ReciverPlace: 'Tanger',
        Description:
          'Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.',
        Weight: '5kg',
        Dimension: '20 x 20 x 80 cm',
        Title: 'Bagages',
        Image: '/Assets/Bags.png',
        Address: 'De Madrid à Tanger',
        Date: 'Date prévue d’envoi vendredi, 09 Dec',
      },
      {
        id: '5',
        SenderName: 'Malik E',
        SenderPic: '/Assets/OfferDetails.png',
        SenderPlace: 'Madrid',
        ReciverPlace: 'Tanger',
        Description:
          'Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.',
        Weight: '5kg',
        Dimension: '20 x 20 x 80 cm',
        Title: 'Carton',
        Image: '/Assets/Carton.png',
        Address: 'De Madrid à Tanger',
        Date: 'Date prévue d’envoi vendredi, 09 Dec',
      },
      {
        id: '6',
        SenderName: 'Malik F',
        SenderPic: '/Assets/OfferDetails.png',
        SenderPlace: 'Madrid',
        ReciverPlace: 'Tanger',
        Description:
          'Lorem ipsum dolor sit amet consectetur. Nibh aliquam ullamcorper senectus cursus. Id sed pretium lobortis laoreet pellentesque. Vel diam mauris augue dolor sed interdum nibh. Pulvinar euismod egestas magnis maecenas.',
        Weight: '5kg',
        Dimension: '20 x 20 x 80 cm',
        Title: 'Bagages',
        Image: '/Assets/Nopicture.png',
        Address: 'De Madrid à Tanger',
        Date: 'Date prévue d’envoi vendredi, 09 Dec',
      },
    ],
    Departs: [
      {
        Id: '1',
        Rating: 4,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        IsVerified: true,
        CompanyName: 'Agence Prans Trans',
        CompanyImage: '/Assets/Prans.png',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Direct',
      },
      {
        Id: '2',
        Rating: 5,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        IsVerified: true,
        CompanyName: 'Agence MTT Trans',
        CompanyImage: '/Assets/MTT.png',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Direct',
      },
      {
        Id: '3',
        Rating: 3,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        IsVerified: true,
        CompanyImage: '/Assets/Boumara.png',
        CompanyName: 'Agence BOUMARA Trans',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Avec escale',
      },
      {
        Id: '4',
        Rating: 4,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        IsVerified: true,
        CompanyImage: '/Assets/Boumara.png',
        CompanyName: 'Agence Prans Trans',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Avec escale',
      },
      {
        Id: '5',
        Rating: 5,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        IsVerified: true,
        CompanyImage: '/Assets/Prans.png',
        CompanyName: 'Agence Prans Trans',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Avec escale',
      },
      {
        Id: '6',
        IsVerified: false,
        Rating: 4,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        CompanyImage: '/Assets/MTT.png',
        CompanyName: 'Agence MTT Trans',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Direct',
      },
      {
        Id: '7',
        Rating: 5,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        IsVerified: false,
        CompanyName: 'Agence BOUMARA Trans',
        CompanyImage: '/Assets/Boumara.png',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Direct',
      },
      {
        Id: '8',
        Rating: 3,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        CompanyName: 'Agence BOUMARA Trans',
        IsVerified: false,
        CompanyImage: '/Assets/Boumara.png',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Avec escale',
      },
      {
        Id: '9',
        Rating: 5,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        CompanyName: 'Agence BOUMARA Trans',
        IsVerified: false,
        CompanyImage: '/Assets/Boumara.png',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Avec escale',
      },
      {
        Id: '10',
        Rating: 5,
        Phone: '+212 530 800 800',
        Address: 'Avenue Hassan II, Imm II, Oujda centre',
        CompanyName: 'Agence BOUMARA Trans',
        IsVerified: false,
        CompanyImage: '/Assets/Boumara.png',
        SendingPlace: 'Paris, France',
        SendingDate: 'Dimanche 30 octobre',
        RecievingDate: 'Mardi 1 novembre',
        RecievingPlace: 'Agadir, Marroc',
        SendingMode: 'Avec escale',
      },
    ],
  },
};

export default Data;
