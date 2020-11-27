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
      {
        icon: "BoxIcon",
        pageName: "side-menu-menu-layout",
        title: "Menu Layout",
        subMenu: [
          {
            icon: "",
            pageName: "side-menu-dashboard",
            title: "Side Menu",
            ignore: true
          },
          {
            icon: "",
            pageName: "simple-menu-dashboard",
            title: "Simple Menu",
            ignore: true
          },
          {
            icon: "",
            pageName: "top-menu-dashboard",
            title: "Top Menu",
            ignore: true
          }
        ]
      },
      {
        icon: "MessageSquareIcon",
        pageName: "side-menu-chat",
        title: "Chat"
      },
      {
        icon: "FileTextIcon",
        pageName: "side-menu-post",
        title: "Post"
      },
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
            pageName: "side-menu-change-password",
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
