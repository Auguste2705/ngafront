const state = () => {
  return {
    menu: [
      {
        icon: "HomeIcon",
        pageName: "side-menu-dashboard",
        title: "Tableau de bord"
      },
      {
        icon: "UserIcon",
        pageName: "Profiledoctor",
        title: "Profil Médécin"
      },
      {
        icon: "UserIcon",
        pageName: "Registerdoctor",
        title: "Je créer mon profil"
      },
      {
        icon: "HardDriveIcon",
        pageName: "ListPatient",
        title: "Liste des patients"
      },
      {
        icon: "CreditCardIcon",
        pageName: "Facture",
        title: "Facture"
      },
      // {
      //   icon: "MessageSquareIcon",
      //   pageName: "side-menu-chat",
      //   title: "Chat"
      // },
      // {
      //   icon: "FileTextIcon",
      //   pageName: "side-menu-post",
      //   title: "Post"
      // },
      {
        icon: "LayoutIcon",
        pageName: "side-menu-layout",
        title: "Services",
        subMenu: [
          {
            icon: "",
            pageName: "Listservice",
            title: "Liste des services"
          },
          {
            icon: "",
            pageName: "Addservice",
            title: "Ajouter un service"
          }
        ]
      },
      {
        icon: "EditIcon",
        pageName: "side-menu-crud",
        title: "Forum",
        subMenu: [
          {
            icon: "",
            pageName: "Article",
            title: "Créer un article"
          },
          {
            icon: "",
            pageName: "side-menu-crud-data-list",
            title: "Data List"
          }
        ]
      },
      {
        icon: "HexagonIcon",
        pageName: "side-menu-pricing",
        title: "Abonnement",
        subMenu: [
          {
            icon: "",
            pageName: "Subscription",
            title: "liste des abonnements"
          },
          {
            icon: "",
            pageName: "side-menu-point-of-sale",
            title: "Layout 1"
          }
        ]
      },
      {
        icon: "FilmIcon",
        pageName: "side-menu-blog",
        title: "Calendrier",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-blog-layout-1",
            title: "Layout 1"
          },
          {
            icon: "",
            pageName: "side-menu-blog-layout-2",
            title: "Layout 2"
          },
          {
            icon: "",
            pageName: "side-menu-blog-layout-3",
            title: "Layout 3"
          }
        ]
      }
    ]
  };
};

// getters
const getters = {
  menu: state => state.menu
};

// actions
const actions = {};

// mutations
const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
