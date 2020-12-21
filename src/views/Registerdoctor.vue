<template>
  <div class="mt-10">
    <form action="">
      <div
        class="col-span-12 xxl:col-span-3 xxl:border-l border-theme-5 -mb-10 pb-10"
      >
        <div class="">
          <div class="intro-y box">
            <div class="p-5 border-b border-gray-200 dark:border-dark-5">
              <h2
                class="font-serif font-semibold lg:text-5xl sm:text-3xl font-bold text-blue-700 text-center"
              >
                Formulaire d'enrégistrement du médécin
              </h2>
              <div
                class="w-full sm:w-auto flex items-center sm:ml-auto mt-3 sm:mt-0"
              ></div>
            </div>
            <div id="input" class="p-5">
              <div class="lg:w-full mb-6 md:mb-0">
                <div>
                  <label>Nom de l'hopital</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-4 mb-4">
                <div class="w-full md:w-1/2 px-3">
                  <div>
                    <label>Département</label>
                    <div>
                      <select class="input w-full border mt-2">
                        <option>Optique</option>
                        <option>Liam Neeson</option>
                        <option>Daniel Craig</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <div>
                    <label>Adresse de l'hopital</label>
                    <input
                      type="text"
                      class="input w-full border mt-2"
                      placeholder="Input text"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-4 mb-4">
                <div class="w-full md:w-1/2 px-3">
                  <label>Adresse mail de l'hopital</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="**************@example.com"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <div>
                    <label>Téléphone</label>
                    <input
                      type="text"
                      class="input w-full border mt-2"
                      placeholder="Input text"
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-4 mb-4">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label>Code Postal</label>
                  <input
                    type="text"
                    class="input w-full border mt-2"
                    placeholder="Input text"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label>Ville</label>
                  <div>
                    <select class="input w-full border mt-2">
                      <option>Optique</option>
                      <option>Liam Neeson</option>
                      <option>Daniel Craig</option>
                    </select>
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label>Pays</label>
                  <div>
                    <select class="input w-full border mt-2">
                      <option>Optique</option>
                      <option>Liam Neeson</option>
                      <option>Daniel Craig</option>
                    </select>
                  </div>
                </div>
              </div>
              <!--                File upload-->
              <div class="lg:w-full mb-6 md:mb-0">
                <div id="single-file-upload">
                  <div class="preview">
                    <div class="mb-2">
                      <label>Attestation de Réussite</label>
                    </div>
                    <VueDropzone
                      id="dropzone-single"
                      :use-custom-slot="true"
                      :options="{
                        url: 'https://httpbin.org/post',
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        maxFiles: 1,
                        headers: { 'My-Awesome-Header': 'header value' }
                      }"
                      class="dropzone font-roboto border-gray-200 border-dashed text-gray-800 hover:bg-transparent"
                    >
                      <div class="text-lg font-medium">
                        Chargez votre attestation de diplome ici
                      </div>
                      <div class="text-gray-600">
                        Cliquez-ici pour pouvoir selectionner votre fichier.
                        Vous n'avez encore choisi
                        <span class="font-medium">aucun</span> fichier.
                      </div>
                    </VueDropzone>
                  </div>
                  <div class="source-code hidden">
                    <button
                      data-target="#copy-single-file-upload"
                      class="copy-code button button--sm border flex items-center text-gray-700 dark:border-dark-5 dark:text-gray-300"
                    >
                      <FileIcon class="w-4 h-4 mr-2" /> Copy example code
                    </button>
                    <div class="overflow-y-auto h-64 mt-3">
                      <Highlight
                        id="copy-single-file-upload"
                        class="source-preview"
                      >
                        <code
                          class="text-xs p-0 rounded-md html pl-5 pt-8 pb-4 -mb-10 -mt-10"
                        >
                          <textarea>
                      <VueDropzone
                              id=""
                              :use-custom-slot="true"
                              :options="{
                          url: 'https://httpbin.org/post',
                          thumbnailWidth: 150,
                          maxFilesize: 0.5,
                          maxFiles: 1,
                          headers: { 'My-Awesome-Header': 'header value' }
                        }"
                              class="dropzone font-roboto border-gray-200 border-dashed text-gray-800 hover:bg-transparent"
                      >
                        <div class="text-lg font-medium">
                          Drop files here or click to upload.
                        </div>
                        <div class="text-gray-600">
                          This is just a demo dropzone. Selected files are
                          <span class="font-medium">not</span> actually uploaded.
                        </div>
                      </VueDropzone>
                    </textarea
                          >
                        </code>
                      </Highlight>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="flex items-center justify-center text-center px-3 mt-4"
              >
                <button
                  class="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                >
                  <span>Valider</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
export default {
  components: {
    VueDropzone: vue2Dropzone
  },
  methods: {
    dropzoneError(err) {
      if (
        "image/jpeg|image/png|image/jpg".split("|").indexOf(err.type) === -1
      ) {
        alert("Error! Files of this type are not accepted");
      }
    }
  }
};
</script>

<style scoped></style>
