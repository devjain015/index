// function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(name)
}


// categories on the home page
function loadCategories() {
  const categoriesContainer = document.getElementById("categories-container")
  if (!categoriesContainer) return

  let categoriesHTML = ""

  categories.forEach((category) => {
    categoriesHTML += `
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div class="h-56 w-full">
              <img class="mx-auto h-full block" src="${category.image}" alt="${category.name}" />
          </div>
          <div class="pt-6 grid">
            <a class="text-lg leading-tight font-semibold text-gray-900 hover:underline dark:text-white">${category.name}</a>
  
            <div class="mt-4 flex items-center justify-between gap-4">
              <p class="text-sm leading-tight font-extrabold text-gray-900 dark:text-white">${category.description}</p>
            </div>
              <a href="category.html?id=${category.id}" class="ml-auto mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium cursor-pointer text-white focus:ring-4 focus:outline-none">View Products</a>
          </div>
        </div>
    `
  })

        

  categoriesContainer.innerHTML = categoriesHTML
}
// feature
function loadFeatured() {
  const featuredContainer = document.getElementById("featured")
  if (!featuredContainer) return

  let featuredHTML = ""

  featured.forEach((item) => {
    featuredHTML += `
      <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div class="h-56 w-full">
              <img class="mx-auto hidden h-full dark:block" src="${item.images}" alt="${item.name}" />
          </div>
          <div class="pt-6">
            <a class="text-lg leading-tight font-semibold text-gray-900 hover:underline dark:text-white">${item.name}</a>
  
            <div class="mt-4 flex items-center justify-between gap-4">

  
              <a href="product.html?id=${item.id}" class="bg-blue-700 hover:bg-blue-800 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium cursor-pointer text-white focus:ring-4 focus:outline-none">View Details</a>
            </div>
          </div>
        </div>
    `
    
  })

        

  featuredContainer.innerHTML = featuredHTML
}

// load landing
function loadLanding() {
  const LandContainer = document.getElementById("landing")
  if (!LandContainer) return

  const LandHTML = `
        <div class="py-8 px-4 mx-auto text-center lg:pt-16 lg:pb-0 lg:px-12 ">
          <a href="#categories-container" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
              <span class="text-lg font-medium ml-4">Check Our Products</span> 
              <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Bhagya Laxmi Polymer</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">One place for all of your home needs. We "Bhagya Laxmi Polymer" are the leading Manufacturer, Exporter, Wholesaler, Supplier of a wide range of Plastic Food Containers, Plastic Strainer, Plastic Bowl, Plastic Basket, etc.</p>
          
          <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              <span class="font-semibold text-gray-400 uppercase">FEATURED PRODUCTS</span>
          </div> 
      </div>`
    LandContainer.innerHTML = LandHTML
}

// footer component
function loadFooter() {
  const FooterContainer = document.getElementById("footer-container")
  if (!FooterContainer) return

  const FooterHTML = `<div class="mx-auto" id="contactus">

        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="" class="items-center">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bhagya Laxmi Polymer</span>
                    <p class="mt-1 text-gray-800 dark:text-gray-300">19, Namh Kailash Estate, Nr. Omkar Mill, Opp. Ambica Estate, Memco Railway Crossing, Memco, AHEMDABAD - 382345.</p>
                    <p class="mt-1 text-gray-800 dark:text-gray-300">Email: bhagyalaxmipolymer0707@gmail.com</p>
                            <p class="mt-1 text-gray-800 dark:text-gray-300">Phone: +91 9408869180</p>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="" class="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="" class="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">GSTIN: 24ACXPJ8780F1Z0
            </span>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="" class="hover:underline">Bhagya Laxmi Polymer™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </a>
                <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
                </a>
            </div>
        </div>
    </div>`
    FooterContainer.innerHTML = FooterHTML
}

// navbar component
function loadNav() {
  const NavContainer = document.getElementById("nav-container")
  if (!NavContainer) return

  const NavHTML = `
  <nav class="bg-white dark:bg-gray-800 antialiased">
  <div class="px-4 mx-auto py-4">
    <div class="flex items-center justify-between">

      <div class="flex items-center space-x-8">
        <div class="shrink-0">
          <div href="#" title="" class="dark:text-white text-black font-bold text-lg">
           <img src="https://sigmawire.net/i/03/DwdC8J.jpg" class="w-16 h-16">
            Bhagya Laxmi Polymer
          </div>
          <div href="#" title="" class="dark:text-white text-black text-xs">
            GSTIN: 24ACXPJ8780F1Z0
          </div>
        </div>

        <ul class="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
          <li>
            <a href="/" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Home
            </a>
          </li>
          </li>
          <li class="shrink-0">
            <a href="#contactus" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div class="flex items-center lg:space-x-2">
        <a href="mailto:bhagyalaxmipolymer0707@gmail.com" class="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 mx-2"><path fill="white" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>             
          Send Email
        </a>

        <button type="button" data-collapse-toggle="ecommerce-navbar-menu-1" aria-controls="ecommerce-navbar-menu-1" aria-expanded="false" class="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white">
          <span class="sr-only">
            Open Menu
          </span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
          </svg>                
        </button>
      </div>
    </div>

    <div id="ecommerce-navbar-menu-1" class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4">
      <ul class="text-gray-900 dark:text-white text-sm font-medium dark:text-white space-y-3">
        <li>
            <a href="/" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Home
            </a>
          </li>
          <li class="shrink-0">
            <a href="#contactus" title="" class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500">
              Contact Us
            </a>
          </li>
      </ul>
    </div>
  </div>
</nav>`
    NavContainer.innerHTML = NavHTML
}

// products for a specific category
function loadCategoryProducts() {
  const productsContainer = document.getElementById("products-container")
  const categoryTitle = document.getElementById("category-title")
  if (!productsContainer || !categoryTitle) return

  const categoryId = Number.parseInt(getUrlParameter("id"))
  if (!categoryId) {
    window.location.href = "index.html"
    return
  }

  const category = categories.find((cat) => cat.id === categoryId)
  if (!category) {
    window.location.href = "index.html"
    return
  }

  categoryTitle.textContent = category.name

  const categoryProducts = products.filter((product) => product.categoryId === categoryId)
  let productsHTML = ""

  categoryProducts.forEach((product) => {
    productsHTML += `
     <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <div class="h-56 w-full">

              <img class="mx-auto hidden h-full dark:block" src="${product.images[0]}" alt="${product.name}" />

          </div>
          <div class="pt-6">
            <a class="text-lg leading-tight font-semibold text-gray-900 hover:underline dark:text-white">${product.name}</a>
  
            <div class="mt-4 flex items-center justify-between gap-4">
  
              <a href="product.html?id=${product.id}" class="bg-blue-700 hover:bg-blue-800 focus:ring-primary-300 dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-medium cursor-pointer text-white focus:ring-4 focus:outline-none">View Details</a>
            </div>
          </div>
        </div>
    `
    
  })

  productsContainer.innerHTML = productsHTML
}


// product details
function loadProductDetails() {
  const productDetailContainer = document.getElementById("product-detail")
  const backToCategoryLink = document.getElementById("back-to-category")
  if (!productDetailContainer || !backToCategoryLink) return

  const productId = Number.parseInt(getUrlParameter("id"))
  if (!productId) {
    window.location.href = "index.html"
    return
  }

  const product = products.find((prod) => prod.id === productId)
  if (!product) {
    window.location.href = "index.html"
    return
  }

  // back link
  backToCategoryLink.href = `category.html?id=${product.categoryId}`

  // image gallery
  let imagesHTML = ""
  product.images.forEach((image, index) => {
    imagesHTML += `
      <div class="swiper-slide">
        <img src="${image}" alt="${product.name} - Image ${index + 1}" class="w-full h-full object-contain">
      </div>
    `
  })

  // specifications table
  const specifications = [
    { label: "Brand", value: product.brand },
    { label: "Minimum Order Quantity", value: product.minOrderQuantity },
    { label: "Usage/Application", value: product.usage },
    { label: "Shape", value: product.shape },
    { label: "Size", value: product.size },
    { label: "Capacity", value: product.capacity },
    { label: "Product Code", value: product.productCode },
    { label: "Thickness", value: product.thickness },
    { label: "Type", value: product.type },
    { label: "Material Grade", value: product.materialGrade },
    { label: "Material", value: product.material },
  ]

  let specsHTML = ""
  specifications.forEach((spec, index) => {
    if (spec.value && spec.value !== "N/A") {
      specsHTML += `
        <tr class="border-b border-gray-600 dark:${index % 2 === 0 ? "bg-gray-800" : "bg-gray-800"}">
          <td class="px-4 py-3 font-medium">${spec.label}</td>
          <td class="px-4 py-3">${spec.value}</td>
        </tr>
      `
    }
  })

  // the product detail HTML
  const productHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <div class="p-4 rounded-lg shadow-md mb-6">
          <div class="main-image mb-4">
            <img src="${product.images[0]}" alt="${product.name}" class="w-full h-80 object-contain">
          </div>
          <div class="grid grid-cols-3 gap-2">
            ${product.images
              .map(
                (img, i) => `
              <img src="${img}" alt="${product.name} thumbnail ${i + 1}" 
                class="w-full h-24 object-cover cursor-pointer border hover:border-blue-500 thumbnail-image">
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
      
      <div>
        <h1 class="text-2xl font-bold mb-4">${product.name}</h1>
        <p class="text-gray-400 mb-6">${product.description}</p>
        
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Specifications</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full border border-gray-600 rounded-lg">
              <tbody>
                ${specsHTML}
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Brand Information</h2>
          <p class="text-gray-400">${product.brandAddress}</p>
        </div>
        
        <div class="mb-6">
          <h2 class="text-xl font-semibold mb-3">Additional Information</h2>
          <p class="text-gray-400">${product.additionalInfo}</p>
        </div>
        
        <button id="contact-seller-btn" class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
          <i class="fas fa-envelope mr-2"></i> Contact Seller
        </button>
      </div>
    </div>
  `

  productDetailContainer.innerHTML = productHTML

  // contact form with product name
  document.getElementById("product-name-input").value = product.name

  // event listeners for the contact form modal
  document.getElementById("contact-seller-btn").addEventListener("click", () => {
    document.getElementById("contact-modal").classList.remove("hidden")
  })

  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("contact-modal").classList.add("hidden")
  })

  // thumbnail image click handlers
  const thumbnails = document.querySelectorAll(".thumbnail-image")
  const mainImage = document.querySelector(".main-image img")

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src
    })
  })
}

// pagination
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname

  if (path.includes("index.html") || path.endsWith("/")) {
    loadCategories()
  } else if (path.includes("category.html")) {
    loadCategoryProducts()
  } else if (path.includes("product.html")) {
    loadProductDetails()
  }
  loadNav();
  loadLanding();
  loadFooter();
  loadFeatured();
  // Handle form submission
  const quoteForm = document.getElementById("quote-form")
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      if (!quoteForm.action) {
        alert("Form submit error.")
        e.preventDefault()
      }
    })
  }
})

