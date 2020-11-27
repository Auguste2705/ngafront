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
        pageName: "side-menu-file-manager",
        title: "Liste des patients"
      },
      {
        icon: "HardDriveIcon",
        pageName: "Patientlist",
        title: "Liste patients"
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
        icon: "CreditCardIcon",
        pageName: "side-menu-point-of-sale",
        title: "Point of Sale"
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
