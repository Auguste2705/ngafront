<template>
  <div>
    <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Gestion de profil</h2>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
      >
        <div class="intro-y box mt-5">
          <div class="relative flex items-center p-5">
            <div class="w-12 h-12 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                class="rounded-full"
                :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
              />
            </div>
            <div class="ml-4 mr-auto">
              <div class="font-medium text-base">
                {{ $f()[0].users[0].name }}
              </div>
              <div class="text-gray-600">{{ $f()[0].jobs[0] }}</div>
            </div>
          </div>
          <div class="p-5 border-t border-gray-200 dark:border-dark-5">
            <a
              class="flex items-center hover:text-blue-700"
              href="/edit_password"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Gestion de mot de passe
            </a>
            <a class="flex items-center mt-5 hover:text-blue-700" href="">
              <SettingsIcon class="w-4 h-4 mr-2" /> information personnelle
            </a>
          </div>
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <!-- BEGIN: Display Information -->
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Information personnelle
            </h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 xl:col-span-4">
                <div
                  class="border border-gray-200 dark:border-dark-5 rounded-md p-5"
                >
                  <div
                    class="w-40 h-40 relative image-fit cursor-pointer zoom-in mx-auto"
                  >
                    <img
                      class="rounded-md"
                      alt="Midone Tailwind HTML Admin Template"
                      :src="require(`@/assets/images/${$f()[0].photos[0]}`)"
                    />
                    <Tippy
                      tag="div"
                      content="Remove this profile photo?"
                      class="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-theme-6 right-0 top-0 -mr-2 -mt-2"
                    >
                      <xIcon class="w-4 h-4" />
                    </Tippy>
                  </div>
                  <div class="w-40 mx-auto cursor-pointer relative mt-5">
                    <button
                      type="button"
                      class="button w-full bg-theme-1 text-white"
                    >
                      Choisir une Photo
                    </button>
                    <input
                      type="file"
                      class="w-full h-full top-0 left-0 absolute opacity-0"
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-12 xl:col-span-8">
                <div>
                  <label>Nom</label>
                  <input
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Input text"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Prénom</label>
                  <input
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Input text"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Email</label>
                  <input
                    type="email"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Input text"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Spécialité</label>
                  <input
                    type="text"
                    class="input w-full border bg-gray-100 cursor-not-allowed mt-2"
                    placeholder="Input text"
                    :value="$f()[0].users[0].name"
                    disabled
                  />
                </div>
                <div class="mt-3">
                  <label>Description du médécin</label>
                  <textarea
                    class="input w-full border mt-2"
                    placeholder="Décrivez en quelques mots votre personne."
                  >
                  </textarea>
                </div>
                <!--                <div class="mt-3">-->
                <!--                  <label></label>-->
                <!--                  <select class="input w-full border mt-2">-->
                <!--                    <option>Domicile</option>-->
                <!--                    <option>Hopital</option>-->
                <!--                    <option>Les deux</option>-->
                <!--                  </select>-->
                <!--                </div>-->
                <div class="mt-3">
                  <label>Consultation</label>
                  <div class="flex flex-col sm:flex-row mt-2">
                    <div
                      class="flex items-center text-gray-700 dark:text-gray-500 mr-2"
                    >
                      <input
                        id="horizontal-radio-chris-evans"
                        type="radio"
                        class="input border mr-2"
                        name="horizontal_radio_button"
                        value="horizontal-radio-chris-evans"
                      />
                      <label
                        class="cursor-pointer select-none"
                        for="horizontal-radio-chris-evans"
                        >Domicile</label
                      >
                    </div>
                    <div
                      class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
                    >
                      <input
                        id="horizontal-radio-liam-neeson"
                        type="radio"
                        class="input border mr-2"
                        name="horizontal_radio_button"
                        value="horizontal-radio-liam-neeson"
                      />
                      <label
                        class="cursor-pointer select-none"
                        for="horizontal-radio-liam-neeson"
                        >Hopital</label
                      >
                    </div>
                    <div
                      class="flex items-center text-gray-700 dark:text-gray-500 mr-2 mt-2 sm:mt-0"
                    >
                      <input
                        id="horizontal-radio-daniel-craig"
                        type="radio"
                        class="input border mr-2"
                        name="horizontal_radio_button"
                        value="horizontal-radio-daniel-craig"
                      />
                      <label
                        class="cursor-pointer select-none"
                        for="horizontal-radio-daniel-craig"
                        >Les deux</label
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-3">
                  <label>Année d'expérience</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                  />
                </div>
                <button
                  type="button"
                  class="button w-24 bg-theme-1 text-white mt-3"
                >
                  Modifier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6">
      <!-- BEGIN: Profile Menu -->
      <div
        class="col-span-12 lg:col-span-4 xxl:col-span-3 flex lg:block flex-col-reverse"
      >
        <div class="intro-y box mt-5">
          <div class="relative flex items-center p-5">
            <div class="ml-4 mr-auto">
              <h2 class="text-lg font-medium mr-auto">
                Information professionnelle
              </h2>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Profile Menu -->
      <div class="col-span-12 lg:col-span-8 xxl:col-span-9">
        <div class="intro-y box lg:mt-5">
          <div
            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"
          >
            <h2 class="font-medium text-base mr-auto">
              Information professionnelle
            </h2>
          </div>
          <div class="p-5">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 xl:col-span-6">
                <div>
                  <label>Nom de l'hopital</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Entrez le nom de l'hopital"
                  />
                </div>
                <div class="mt-3">
                  <label>Addresse de l'hopital</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                    value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                  />
                </div>
                <div class="mt-3">
                  <label>Code postal</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                  />
                </div>
                <div class="mt-3">
                  <label>Pays</label>
                  <select class="input w-full border mt-2">
                    <option>Bénin</option>
                    <option>Sénégal</option>
                  </select>
                </div>
                <div class="cursor-pointer relative mt-3">
                  <label>Attestation du diplôme</label>
                  <button
                    type="button"
                    class="button w-full bg-theme-1 text-white mt-2"
                  >
                    Chargez le fichier
                  </button>
                  <input
                    type="file"
                    class="w-full h-full top-0 left-0 absolute opacity-0"
                  />
                </div>
                <div class="cursor-pointer relative mt-3">
                  <label>Photocopie Passport</label>
                  <button
                    type="button"
                    class="button w-full bg-theme-1 text-white mt-2"
                  >
                    Chargez votre passport ici
                  </button>
                  <input
                    type="file"
                    class="w-full h-full top-0 left-0 absolute opacity-0"
                  />
                </div>
              </div>
              <div class="col-span-12 xl:col-span-6">
                <div>
                  <label>Département</label>
                  <select class="input w-full border mt-2">
                    <option>Généraliste</option>
                    <option>Dermatologie</option>
                    <option>Ophtamologie</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label>Téléphone</label>
                  <input
                    type="tel"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                  />
                </div>
                <div class="mt-3">
                  <label>Ville</label>
                  <select class="input w-full border mt-2">
                    <option>Cotonou</option>
                    <option>Dakar</option>
                    <option>Parakou</option>
                    <option>Porto-Novo</option>
                    <option>Rufisque</option>
                    <option>Thies</option>
                  </select>
                </div>
                <div class="mt-3">
                  <label>Immatriculation dans l’ordre des médecins</label>
                  <input
                    type="tel"
                    class="input w-full border mt-2"
                    placeholder="N°**********"
                  />
                </div>
                <div class="mt-3">
                  <label>Type de pièce</label>
                  <select class="input w-full border mt-2">
                    <option>CNI</option>
                    <option>Passport</option>
                    <option>Permis de conduire</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex justify-end mt-4">
              <a href="" class="text-theme-6 flex items-center">
                <Trash2Icon class="w-4 h-4 mr-1" /> Delete Account
              </a>
              <button
                type="button"
                class="button w-20 bg-theme-1 text-white ml-auto"
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
        <!-- END: Display Information -->
        <!--        <div class="intro-y flex items-center mt-8">-->
        <!--          <h2 class="text-left -mr-10 text-lg font-medium mr-auto">-->
        <!--            Gestion de profil-->
        <!--          </h2>-->
        <!--        </div>-->
        <!--        &lt;!&ndash; BEGIN: Personal Information &ndash;&gt;-->
        <!--        <div class="intro-y box lg:mt-5">-->
        <!--          <div-->
        <!--            class="flex items-center p-5 border-b border-gray-200 dark:border-dark-5"-->
        <!--          >-->
        <!--            <h2 class="font-medium text-base mr-auto">-->
        <!--              Information professionnelle-->
        <!--            </h2>-->
        <!--          </div>-->
        <!--          <div class="p-5">-->
        <!--            <div class="grid grid-cols-12 gap-5">-->
        <!--              <div class="col-span-12 xl:col-span-6">-->
        <!--                <div>-->
        <!--                  <label>Nom de l'hopital</label>-->
        <!--                  <input-->
        <!--                    type="text"-->
        <!--                    class="input w-full border mt-2"-->
        <!--                    placeholder="Entrez le nom de l'hopital"-->
        <!--                  />-->
        <!--                </div>-->
        <!--                <div class="mt-3">-->
        <!--                  <label>Addresse de l'hopital</label>-->
        <!--                  <input-->
        <!--                    type="text"-->
        <!--                    class="input w-full border mt-2"-->
        <!--                    placeholder="Input text"-->
        <!--                    value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"-->
        <!--                  />-->
        <!--                </div>-->
        <!--                <div class="mt-3">-->
        <!--                  <label>Code postal</label>-->
        <!--                  <input-->
        <!--                    type="text"-->
        <!--                    class="input w-full border mt-2"-->
        <!--                    placeholder="Input text"-->
        <!--                  />-->
        <!--                </div>-->
        <!--                <div class="mt-3">-->
        <!--                  <label>Pays</label>-->
        <!--                  <select class="input w-full border mt-2">-->
        <!--                    <option>Bénin</option>-->
        <!--                    <option>Sénégal</option>-->
        <!--                  </select>-->
        <!--                </div>-->
        <!--                <div class="cursor-pointer relative mt-3">-->
        <!--                  <label>Attestation du diplôme</label>-->
        <!--                  <button-->
        <!--                    type="button"-->
        <!--                    class="button w-full bg-theme-1 text-white mt-2"-->
        <!--                  >-->
        <!--                    Chargez le fichier-->
        <!--                  </button>-->
        <!--                  <input-->
        <!--                    type="file"-->
        <!--                    class="w-full h-full top-0 left-0 absolute opacity-0"-->
        <!--                  />-->
        <!--                </div>-->
        <!--              </div>-->
        <!--              <div class="col-span-12 xl:col-span-6">-->
        <!--                <div>-->
        <!--                  <label>Département</label>-->
        <!--                  <select class="input w-full border mt-2">-->
        <!--                    <option>IC</option>-->
        <!--                    <option>FIN</option>-->
        <!--                    <option>Passport</option>-->
        <!--                  </select>-->
        <!--                </div>-->
        <!--                <div class="mt-3">-->
        <!--                  <label>Téléphone</label>-->
        <!--                  <input-->
        <!--                    type="tel"-->
        <!--                    class="input w-full border mt-2"-->
        <!--                    placeholder="Input text"-->
        <!--                  />-->
        <!--                </div>-->
        <!--                <div class="mt-3">-->
        <!--                  <label>Ville</label>-->
        <!--                  <select class="input w-full border mt-2">-->
        <!--                    <option>Cotonou</option>-->
        <!--                    <option>Dakar</option>-->
        <!--                    <option>Parakou</option>-->
        <!--                    <option>Porto-Novo</option>-->
        <!--                    <option>Rufisque</option>-->
        <!--                    <option>Thies</option>-->
        <!--                  </select>-->
        <!--                </div>-->
        <!--                <div class="mt-3">-->
        <!--                  <label>Immatriculation dans l’ordre des médecins</label>-->
        <!--                  <input-->
        <!--                    type="tel"-->
        <!--                    class="input w-full border mt-2"-->
        <!--                    placeholder="N°**********"-->
        <!--                  />-->
        <!--                </div>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--            <div class="flex justify-end mt-4">-->
        <!--              <a href="" class="text-theme-6 flex items-center">-->
        <!--                <Trash2Icon class="w-4 h-4 mr-1" /> Delete Account-->
        <!--              </a>-->
        <!--              <button-->
        <!--                type="button"-->
        <!--                class="button w-20 bg-theme-1 text-white ml-auto"-->
        <!--              >-->
        <!--                Modifier-->
        <!--              </button>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!-- END: Personal Information -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "1"
    };
  }
};
</script>
