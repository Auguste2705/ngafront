<template>
  <div>
    <h2 class="intro-y text-lg font-medium mt-10">
      Liste des patients
    </h2>
    <div class="grid grid-cols-12 gap-6 mt-5">
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2"
      >
        <!--        <button class="button text-white bg-theme-1 shadow-md mr-2">-->
        <!--          Add New Product-->
        <!--        </button>-->
        <!--        <div class="dropdown">-->
        <!--          <button-->
        <!--            class="dropdown-toggle button px-2 box text-gray-700 dark:text-gray-300"-->
        <!--          >-->
        <!--            <span class="w-5 h-5 flex items-center justify-center">-->
        <!--              <PlusIcon class="w-4 h-4" />-->
        <!--            </span>-->
        <!--          </button>-->
        <!--          <div class="dropdown-box w-40">-->
        <!--            <div class="dropdown-box__content box dark:bg-dark-1 p-2">-->
        <!--              <a-->
        <!--                href=""-->
        <!--                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"-->
        <!--              >-->
        <!--                <PrinterIcon class="w-4 h-4 mr-2" /> Print-->
        <!--              </a>-->
        <!--              <a-->
        <!--                href=""-->
        <!--                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"-->
        <!--              >-->
        <!--                <FileTextIcon class="w-4 h-4 mr-2" /> Export to Excel-->
        <!--              </a>-->
        <!--              <a-->
        <!--                href=""-->
        <!--                class="flex items-center block p-2 transition duration-300 ease-in-out bg-white dark:bg-dark-1 hover:bg-gray-200 dark:hover:bg-dark-2 rounded-md"-->
        <!--              >-->
        <!--                <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF-->
        <!--              </a>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--        <div class="hidden md:block mx-auto text-gray-600">-->
        <!--          Showing 1 to 10 of 150 entries-->
        <!--        </div>-->
        <div class="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
          <div class="w-56 relative text-gray-700 dark:text-gray-300">
            <input
              type="text"
              class="input w-56 box pr-10 placeholder-theme-13"
              placeholder="Search..."
            />
            <SearchIcon
              class="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
            />
          </div>
        </div>
      </div>
      <!-- BEGIN: Data List -->
      <div class="intro-y col-span-12 overflow-auto lg:overflow-visible">
        <table class="table table-report -mt-2">
          <thead>
            <tr>
              <th class="whitespace-no-wrap">IMAGES</th>
              <th class="whitespace-no-wrap">Nom</th>
              <th class="whitespace-no-wrap">Prénom</th>
              <!--              <th class="whitespace-no-wrap">Allergies</th>-->
              <th class="whitespace-no-wrap">
                Date de consultations
              </th>
              <th class="whitespace-no-wrap">Consultations</th>
              <th class="whitespace-no-wrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(faker, fakerKey) in $_.take($f(), 9)"
              :key="fakerKey"
              class="intro-x"
            >
              <td class="w-40">
                <div class="flex">
                  <div class="w-10 h-10 image-fit zoom-in">
                    <Tippy
                      tag="img"
                      alt="Midone Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="require(`@/assets/images/${faker.images[0]}`)"
                      :content="`Uploaded at ${faker.dates[0]}`"
                    />
                  </div>
                  <div class="w-10 h-10 image-fit zoom-in -ml-5">
                    <Tippy
                      tag="img"
                      alt="Midone Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="require(`@/assets/images/${faker.images[1]}`)"
                      :content="`Uploaded at ${faker.dates[0]}`"
                    />
                  </div>
                  <div class="w-10 h-10 image-fit zoom-in -ml-5">
                    <Tippy
                      tag="img"
                      alt="Midone Tailwind HTML Admin Template"
                      class="rounded-full"
                      :src="require(`@/assets/images/${faker.images[2]}`)"
                      :content="`Uploaded at ${faker.dates[0]}`"
                    />
                  </div>
                </div>
              </td>
              <td>
                <a href="" class="font-medium whitespace-no-wrap">{{
                  faker.products[0].name
                }}</a>
                <div class="text-gray-600 text-xs whitespace-no-wrap">
                  {{ faker.products[0].category }}
                </div>
              </td>
              <td>
                <a href="" class="font-medium whitespace-no-wrap">{{
                  faker.products[0].name
                }}</a>
                <div class="text-gray-600 text-xs whitespace-no-wrap">
                  {{ faker.products[0].category }}
                </div>
              </td>
              <td class="text-center">{{ faker.stocks[0] }}</td>
              <td class="w-40">
                <div
                  class="flex items-center justify-center"
                  :class="{
                    'text-theme-9': faker.true_false[0],
                    'text-theme-6': !faker.true_false[0]
                  }"
                >
                  <CheckSquareIcon class="w-4 h-4 mr-2" />
                  {{ faker.true_false[0] ? "Oui" : "Non" }}
                </div>
              </td>
              <td class="table-report__action w-56">
                <div class="flex justify-center items-center">
                  <a class="flex items-center mr-3" href="javascript:;">
                    <CheckSquareIcon class="w-4 h-4 mr-1" />
                    Edit
                  </a>
                  <a
                    class="flex items-center text-theme-6"
                    href="javascript:;"
                    data-toggle="modal"
                    data-target="#delete-confirmation-modal"
                  >
                    <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END: Data List -->
      <!-- BEGIN: Pagination -->
      <div
        class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-no-wrap items-center"
      >
        <ul class="pagination">
          <li>
            <a class="pagination__link" href="">
              <ChevronsLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronLeftIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">1</a>
          </li>
          <li>
            <a class="pagination__link pagination__link--active" href="">2</a>
          </li>
          <li>
            <a class="pagination__link" href="">3</a>
          </li>
          <li>
            <a class="pagination__link" href="">...</a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronRightIcon class="w-4 h-4" />
            </a>
          </li>
          <li>
            <a class="pagination__link" href="">
              <ChevronsRightIcon class="w-4 h-4" />
            </a>
          </li>
        </ul>
        <select class="w-20 input box mt-3 sm:mt-0">
          <option>10</option>
          <option>25</option>
          <option>35</option>
          <option>50</option>
        </select>
      </div>
      <!-- END: Pagination -->
    </div>
    <!-- BEGIN: Delete Confirmation Modal -->
    <div id="delete-confirmation-modal" class="modal">
      <div class="modal__content">
        <div class="p-5 text-center">
          <xCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
          <div class="text-3xl mt-5">Are you sure?</div>
          <div class="text-gray-600 mt-2">
            Do you really want to delete these records? This process cannot be
            undone.
          </div>
        </div>
        <div class="px-5 pb-8 text-center">
          <button
            type="button"
            data-dismiss="modal"
            class="button w-24 border text-gray-700 mr-1"
          >
            Cancel
          </button>
          <button type="button" class="button w-24 bg-theme-6 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- END: Delete Confirmation Modal -->
  </div>
</template>
