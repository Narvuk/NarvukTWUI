// Toggle user menu dropdown
const userMenuButton = document.getElementById('userMenuButton');
const userMenu = document.getElementById('userMenu');

userMenuButton.addEventListener('click', () => {
    userMenu.classList.toggle('hidden');
});

// Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
    const isClickInside = userMenuButton.contains(event.target) || userMenu.contains(event.target);
    if (!isClickInside) {
        userMenu.classList.add('hidden');
    }
});

// Toggle submenu visibility
function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('hidden');

    // Rotate arrow icon
    const arrow = document.getElementById('arrow-1');
    arrow.classList.toggle('rotate-180');
}

// Function to show the selected menu and hide others
function showMenu(menuId) {
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => {
        if (menu.id === menuId) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });
}

document.getElementById('notificationButton').addEventListener('click', function () {
    var dropdown = document.getElementById('notificationDropdown');
    dropdown.classList.toggle('hidden');
});

// Close the dropdown if clicked outside
window.addEventListener('click', function (e) {
    var button = document.getElementById('notificationButton');
    var dropdown = document.getElementById('notificationDropdown');
    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});


document.getElementById('appsButton').addEventListener('click', function () {
    var dropdown = document.getElementById('appsDropdown');
    dropdown.classList.toggle('hidden');
});

// Close the dropdown if clicked outside
window.addEventListener('click', function (e) {
    var button = document.getElementById('appsButton');
    var dropdown = document.getElementById('appsDropdown');
    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});



// Toggle dark mode
function toggleDarkMode() {
    // Toggle dark mode class
    document.documentElement.classList.toggle('dark');

    // Save the current theme preference in localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Check the saved theme preference when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the stored theme, default to 'light' if not set
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme on page load
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});
// Toggle sidebar visibility on mobile view
document.getElementById('hamburgerButton').addEventListener('click', function () {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
});

document.addEventListener('DOMContentLoaded', function () {
    // Check if sidebar state is saved in localStorage
    var sidebarState = localStorage.getItem('sidebarState') || 'open'; // Default to 'closed' if no state is saved
    var sidebartoggle = document.getElementById('sidebar');
    var openIcon = document.getElementById('openIcon');
    var closeIcon = document.getElementById('closeIcon');

    // Set initial sidebar state based on saved value
    if (sidebarState === 'open') {
        sidebartoggle.classList.remove('hidden');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        sidebartoggle.classList.add('hidden');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }

    // Add event listener to toggle sidebar
    document.getElementById('toggleSidebar').addEventListener('click', function () {
        // Toggle sidebar visibility
        sidebartoggle.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');

        // Save the current state to localStorage
        if (sidebartoggle.classList.contains('hidden')) {
            localStorage.setItem('sidebarState', 'closed');
        } else {
            localStorage.setItem('sidebarState', 'open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    //console.log("Year:", currentYear); // Check if we are getting the correct year
    document.getElementById('currentYear').textContent = currentYear;
});

// Check if the elements exist before adding event listeners
if (document.querySelector('[data-collapse-toggle="navbar-dropdown"]') && document.querySelectorAll('.content-menu-link').length > 0) {
    // Mobile menu toggle (hamburger button)
    document.querySelector('[data-collapse-toggle="navbar-dropdown"]').addEventListener('click', function () {
        const navbar = document.querySelector('.navbar-menu');
        navbar.classList.toggle('hidden');
    });

    // Dropdown toggle for Menu 1 and Menu 2
    document.querySelectorAll('.content-menu-link').forEach(function (menu) {
        menu.addEventListener('click', function (e) {
            // Close all other dropdowns
            document.querySelectorAll('.content-menu-dropdown').forEach(function (dropdown) {
                // Only close dropdowns that are not the one clicked
                if (dropdown !== menu.nextElementSibling) {
                    dropdown.classList.add('hidden');
                }
            });

            const dropdown = menu.nextElementSibling;
            if (dropdown && dropdown.classList.contains('content-menu-dropdown')) {
                // Toggle visibility of the clicked dropdown
                dropdown.classList.toggle('hidden');
            }

            e.stopPropagation();  // Prevent event from propagating and closing the menu
        });
    });

    // Close dropdowns when clicking anywhere outside the menu
    window.addEventListener('click', function (e) {
        const dropdowns = document.querySelectorAll('.content-menu-dropdown');
        dropdowns.forEach(function (dropdown) {
            // Check if the click was outside of the dropdown and the parent menu link
            if (!dropdown.contains(e.target) && !e.target.classList.contains('content-menu-link')) {
                dropdown.classList.add('hidden');  // Hide the dropdown
            }
        });
    });
    
}

if (document.querySelector('[data-collapse-toggle="navbar-dropdown-additional"]') && document.querySelectorAll('.content-menu-additional-link').length >= 0) {
    // Mobile menu toggle (hamburger button)
    document.querySelector('[data-collapse-toggle="navbar-dropdown-additional"]').addEventListener('click', function () {
        const navbar = document.querySelector('.additional-options');
        navbar.classList.toggle('hidden');
    });

    // Dropdown toggle for Menu 1 and Menu 2
    document.querySelectorAll('.content-menu-additional-link').forEach(function (menu) {
        menu.addEventListener('click', function (e) {
            // Close all other dropdowns
            document.querySelectorAll('.content-menu-additional-dropdown').forEach(function (dropdown) {
                // Only close dropdowns that are not the one clicked
                if (dropdown !== menu.nextElementSibling) {
                    dropdown.classList.add('hidden');
                }
            });

            const dropdown = menu.nextElementSibling;
            if (dropdown && dropdown.classList.contains('content-menu-additional-dropdown')) {
                // Toggle visibility of the clicked dropdown
                dropdown.classList.toggle('hidden');
            }

            e.stopPropagation();  // Prevent event from propagating and closing the menu
        });
    });

    // Close dropdowns when clicking anywhere outside the menu
    window.addEventListener('click', function (e) {
        const dropdowns = document.querySelectorAll('.content-menu-additional-dropdown');
        dropdowns.forEach(function (dropdown) {
            // Check if the click was outside of the dropdown and the parent menu link
            if (!dropdown.contains(e.target) && !e.target.classList.contains('content-menu-additional-link')) {
                dropdown.classList.add('hidden');  // Hide the dropdown
            }
        });
    });
    
}