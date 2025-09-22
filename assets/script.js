
// ToogleSidebar 
        function toggleSidebar() {
            var sidebar = document.getElementById("sidebar");
            var overlay = document.getElementById("overlay");
            var toggleButton = document.getElementById("toggleButton");

            sidebar.classList.toggle("open");
            overlay.classList.toggle("open");

// Toggle icon in button
            if (sidebar.classList.contains("open")) {
                toggleButton.textContent = "X";
            } else {
                toggleButton.textContent = "☰";
            }
        }

// Menu Items 
        function searchMenuItems() {
            const input = document.getElementById("searchInput").value.toLowerCase();
            const items = document.querySelectorAll(".menu-item");

            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(input)) {
                    item.style.display = "";
                } else {
                    item.style.display = "none";
                }
            });
        }

// Language

      function toggleLanguageDropdown() {
            var languageDropdown = document.getElementById("languageDropdown");
            languageDropdown.style.display = languageDropdown.style.display === "block" ? "none" : "block";
        }

// Language Selection
        function toggleLanguageDropdown() {
            const dropdown = document.getElementById("language-dropdown");
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }

// Close the dropdown if clicked outside
        window.onclick = function(event) {
            const dropdown = document.getElementById("language-dropdown");
            if (!event.target.matches('.language-selector') && !event.target.closest('.language-selector')) {
                dropdown.style.display = "none";
            }
        };
// Zoom Logo
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

  //Load More and Shuffle Script
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('search-input');
  const loadMoreBtn = document.getElementById("load-more-btn");
  const productList = document.getElementById("product-list");
  

  // Get product elements as array
  const products = Array.from(productList.children);

  // Shuffle ONCE
  for (let i = products.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [products[i], products[j]] = [products[j], products[i]];
  }
  products.forEach(product => productList.appendChild(product));

  // Load More settings
  let visibleCount = 10;             
  const loadIncrement = 5;          

  function showProducts() {
    products.forEach((product, index) => {
      product.style.display = index < visibleCount ? "block" : "none";
    });

    loadMoreBtn.style.display = 
      visibleCount >= products.length ? "none" : "block";
  }

  // Load More click
  loadMoreBtn.addEventListener("click", () => {
    visibleCount += loadIncrement;
    showProducts();
  });

  // Initial display
  showProducts();

          // Initial display
  showProducts();

          // Load More click
  loadMoreBtn.addEventListener("click", () => {
    visibleCount += loadIncrement;
    showProducts();
  });

  // SCRIPT FOR PRODUCT SEARCH
  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    let anyMatch = false;

    products.forEach((product, index) => {
      const title = product.querySelector('.product-name')?.textContent.toLowerCase() || '';
      const author = product.querySelector('.product-author')?.textContent.toLowerCase() || '';
      const description = product.querySelector('.product-description')?.textContent.toLowerCase() || '';

      const matches = title.includes(searchTerm) || author.includes(searchTerm) || description.includes(searchTerm);

      product.style.display = matches ? "block" : "none";
      if (matches) anyMatch = true;
    });

    // Hide load more if searching
    loadMoreBtn.style.display = searchTerm.length > 0 || !anyMatch ? "none" : (visibleCount < products.length ? "block" : "none");

    // Reset display if search is cleared
    if (searchTerm === "") {
      showProducts();
    }
  });
});

// to delete

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".product img").forEach(img => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    img.crossOrigin = "anonymous"; // may fail if CORS blocked
    
    img.addEventListener("load", () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);

      try {
        const pixel = ctx.getImageData(0, 0, 1, 1).data;
        const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
        img.style.backgroundColor = color;
      } catch (err) {
        console.warn("CORS blocked image color reading:", img.src);
      }

      img.style.objectFit = "contain";
      img.style.width = "100%";
      img.style.maxHeight = "290px";
    });
  });
});




// Toggle button function for dark mode
        function toggleDarkMode(button) {
            document.body.classList.toggle("dark-mode");
            document.body.classList.toggle("light-mode");
            document.querySelector('.footer').classList.toggle("dark-mode");
            button.classList.toggle("active");
        }

// Product image selection
    function changeImage(image) {
        document.getElementById('mainImage').src = image;
    }


// Animated Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("live");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




// JavaScript to handle the FAQ -2 
    
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('.faq-icon');
            
            answer.classList.toggle('open');
            icon.classList.toggle('rotate');
            
            // Close other open FAQs
            const allFaqs = document.querySelectorAll('.faq-answer');
            const allIcons = document.querySelectorAll('.faq-icon');
            
            allFaqs.forEach((faq, index) => {
                if (faq !== answer && faq.classList.contains('open')) {
                    faq.classList.remove('open');
                    allIcons[index].classList.remove('rotate');
                }
            });
        }


// <![CDATA[  <-- Script For SVG support

if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}

// ]]>
//Script for fading animation in listing images that has categories
document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll(".listing a, .product, .product a");

    containers.forEach(container => {
        const imgs = container.querySelectorAll("img");
        if (imgs.length === 0) return; // skip empty containers

        let i = 0;

        // Show first image immediately
        imgs[0].classList.add("active");

        // Rotate if multiple images exist
        if (imgs.length > 1) {
            setInterval(() => {
                imgs[i].classList.remove("active");
                i = (i + 1) % imgs.length;
                imgs[i].classList.add("active");
            }, 2000);
        }
    });
});


//Script for loading effect

        document.addEventListener('DOMContentLoaded', function() {
            // Select elements
            const body = document.querySelector('body');
            const loader = document.querySelector('.loader');
            
            // Show content after page loads
            window.addEventListener('load', function() {
                // Add a slight delay for the loading animation to be visible
                setTimeout(function() {
                    loader.classList.add('hidden');
                    body.classList.add('loaded');
                    
                    // Remove loader from DOM after transition completes
                    setTimeout(function() {
                        loader.remove();
                    }, 500);
                }, 100); // Adjust this value to change how long the loader is visible
            });
            
            // Fallback in case the load event doesn't fire
            setTimeout(function() {
                loader.classList.add('hidden');
                body.classList.add('loaded');
                setTimeout(function() {
                    loader.remove();
                }, 500);
            }, 1000);
        });

//Go back 
       function goBack() {
    		window.history.back(); // goes to the previous page in history
	}

