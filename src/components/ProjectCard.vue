<script setup lang="ts">
import { ref } from 'vue';

// Definujeme, co MUSÍ každá karta dostat (to, co je vždycky stejné)
defineProps<{
  title: string;
  shortDescription: string;
  technologies: string[];
}>();

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <div 
    class="portfolio-item" 
    :class="{ open: isOpen }" 
    @click="toggleOpen"
  >
    <div class="portfolio-item-content">
      
      <!-- 1. Fixní část (z props) -->
      <h3>{{ title }}</h3>
      
      <div class="short-description">
        <p>{{ shortDescription }}</p>
        
        <ul class="short-description-points">
          <li v-for="tech in technologies" :key="tech">
            {{ tech }}
          </li>
        </ul>
      </div>

      <!-- 2. Flexibilní část (obsah slotu) -->
      <!-- Používáme v-show, aby se obsah po zavření skryl, ale v DOMu zůstal -->
      <div v-show="isOpen" class="expanded-content">
        <!-- Všechno HTML, které napíšeš mezi <ProjectCard> a </ProjectCard>, se objeví přesně tady -->
        <slot></slot> 
      </div>

    </div>
  </div>
</template>

<style scoped>
    /* ---------------------------------------------------- */
/* 1. ZÁKLADNÍ KARTA PROJEKTU                           */
/* ---------------------------------------------------- */
.portfolio-item {
    background: #FFFFFF;
    padding: 1.5rem;
    border-radius: 12px; /* Rounded corners for a smoother look */
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    z-index: 1;
    box-shadow: 0 8px 20px rgba(0, 171, 228, 0.1); /* Soft shadow by default */
    
    /* Přidáno pro grid (nahrazuje starý table hack) */
    width: 100%; 
    box-sizing: border-box;
}

/* Hover a Active efekty */
.portfolio-item:hover {
    transform: translateY(-8px); /* Lift the item up more */
    box-shadow: 0 16px 40px rgba(0, 171, 228, 0.3); /* More prominent shadow on hover */
    background-color: #F3F9FD; /* Light background color change on hover */
}

.portfolio-item:active {
    transform: translateY(-4px); /* Slight downward movement on click */
}

.portfolio-item:focus-within {
    box-shadow: 0 10px 30px rgba(0, 171, 228, 0.4); /* Stronger shadow on focus */
}

/* ---------------------------------------------------- */
/* 2. OTEVŘENÁ KARTA (ROZKLIKNUTÁ)                      */
/* ---------------------------------------------------- */
.portfolio-item.open {
    box-shadow: 0 10px 30px rgba(0, 171, 228, 0.5); /* Larger shadow */
    z-index: 100;
    
    /* Vylepšené centrování pomocí fixed */
    position: fixed; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1); /* Center and zoom */
    
    max-width: 700px;
    width: 90%; /* Aby se to nedotýkalo okrajů obrazovky */
    max-height: 85vh; /* Zabrání přetečení okna prohlížeče */
    overflow-y: auto; /* Přidá posuvník, pokud je text moc dlouhý */
    background-color: #FFFFFF;
}

.portfolio-item.open:hover {
    /* Zakázání hover posouvání, když je karta rozbalená uprostřed */
    transform: translate(-50%, -50%) scale(1.1); 
    box-shadow: 0 10px 30px rgba(0, 171, 228, 0.5); 
    background-color: #FFFFFF;
}

/* Animace obsahu při otevření */
.portfolio-item-content {
    transition: transform 0.3s ease;
}
.portfolio-item.open .portfolio-item-content {
    transform: scale(0.9);
}

/* ---------------------------------------------------- */
/* 3. NADPISY A KRÁTKÝ POPIS                            */
/* ---------------------------------------------------- */
h3 {
    font-size: 1.6rem;
    color: #00ABE4;
    margin-bottom: 0.75rem;
    font-weight: bold;
}

.short-description {
    text-align: left;
    margin-left: 0.5rem;
    font-size: 1.1rem;
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.5; 
    transition: opacity 0.3s ease; /* Smooth transition for hiding */
}

.portfolio-item.open .short-description {
    opacity: 0; /* Fade out effect */
    pointer-events: none; /* Disable interaction while hidden */
    height: 0; /* Ensure it takes no vertical space */
    overflow: hidden; /* Prevent content from spilling out */
    margin: 0; /* Remove any margin space */
    display: none; /* Completely hide it */
}

/* Odrážky s technologiemi */
.short-description-points {
    display: flex; /* Arrange list items in a row */
    flex-wrap: wrap; /* Pokud je technologií moc, zalomí se na další řádek */
    gap: 10px; /* Add spacing between items */
    list-style: none; /* Remove default bullet points */
    padding: 0;
    margin-top: 1.5rem;
}

.short-description-points li {
    position: relative;
    padding-left: 15px; /* Space for custom dot */
    color: #666; /* Blue color for text */
    font-size: 0.9em; /* Adjust size for a clean look */
}

.short-description-points li::before {
    content: "•"; /* Custom dot */
    position: absolute;
    left: 0; /* Position the dot on the left */
    color: #666; /* Blue color for the dot */
    font-size: 1.2em; /* Slightly larger dot */
    line-height: 1; /* Center align the dot */
}

/* ---------------------------------------------------- */
/* 4. EXPANDOVANÝ OBSAH A DEEP SELEKTORY PRO SLOTY      */
/* ---------------------------------------------------- */
.expanded-content {
    color: #333;
    padding: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.6;
}

/* Vue :deep() selektory - nutné, protože HTML ze slotu se vkládá zvenčí */
:deep(.expanded-content p){
    color: #333;
    text-align: left;
    margin-bottom: 1.5em;
}

/* ---------------------------------------------------- */
/* 5. RESPONZIVITA (MOBILNÍ ZAŘÍZENÍ)                   */
/* ---------------------------------------------------- */
@media (max-width: 768px) {
    .portfolio-item {
        padding: 1rem; /* Less padding for smaller space */
        transform: none; /* Remove hover lift effect for smaller screens */
        box-shadow: 0 4px 10px rgba(0, 171, 228, 0.1); /* Softer shadow */
        max-width: 100%; /* Use full width of the container */
        display: block; /* Stack the items vertically */
        margin-bottom: 1rem; /* Add space between items */
    }

    .portfolio-item:hover {
        transform: none; /* Disable hover effects */
        box-shadow: 0 8px 20px rgba(0, 171, 228, 0.2); /* Softer shadow */
    }

    .portfolio-item.open {
        position: fixed; /* Fixed position so it takes up full screen */
        transform: translate(-50%, -50%); /* Ensure it’s centered */
        max-width: 95%; /* Adjust the max-width */
        max-height: 90vh; /* Adjust the max-height */
        overflow-y: auto; /* Allow scrolling if content exceeds */
        padding: 1.5rem; /* Add padding around content */
        width: 100%;
        /* Odstraněn ten obří záporný margin, fixed positioning to řeší spolehlivě */
    }

    .short-description {
        font-size: 0.9rem; /* Adjusted font size for readability */
    }

    .short-description-points {
        flex-direction: column; /* Stack points vertically */
        gap: 5px; /* Reduce spacing between points */
    }

    h3 {
        font-size: 1.4rem; /* Slightly smaller headings */
    }

    .expanded-content {
        font-size: 1rem; /* Adjust font size */
    }
}
</style>