<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted} from 'vue';

// Definujeme, co MUSÍ každá karta dostat (to, co je vždycky stejné)
defineProps<{
  title: string;
  shortDescription: string;
  technologies: string[];
}>();

const isOpen = ref(false);

watch(isOpen, (open) => {
  if (open) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }
});

const toggleOpen = () => {
    isOpen.value = !isOpen.value;
};

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
});


// odstranění listeneru při zničení komponenty
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
});

</script>

<template>
  <div 
    class="portfolio-item" 
    @click="toggleOpen"
  >
    <div class="portfolio-item-content">
      
      <h3>{{ title }}</h3>
      
      <div class="short-description">
        <p>{{ shortDescription }}</p>
        
        <ul class="short-description-points">
          <li v-for="tech in technologies" :key="tech">
            {{ tech }}
          </li>
        </ul>
      </div>

    </div>
  </div>


  <div 
    v-if="isOpen"
    class="modal-overlay"
    @click.self="toggleOpen"
  >

    <div class="modal-window">
        <!-- Zavírací tlačítko -->
        <button 
            class="close-button"
            @click="toggleOpen"
        >
            ×
        </button>


        <div class="modal-content">
            <h2 class="modal-title">
                {{ title }}
            </h2>

            <div class="expanded-content">
                <slot></slot>
            </div>
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
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-color 0.3s ease;
    box-shadow: 0 8px 20px rgba(0, 171, 228, 0.1);
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
}

.portfolio-item:hover {
    transform: translateY(-8px);
    box-shadow: 
        0 16px 40px rgba(0, 171, 228, 0.3);
    background-color: #F3F9FD;
}

.portfolio-item:active {
    transform: translateY(-4px);
}

/* ---------------------------------------------------- */
/* 2. OBSAH KARTY                                       */
/* ---------------------------------------------------- */

.portfolio-item-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

/* ---------------------------------------------------- */
/* 3. NADPISY A POPIS                                   */
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
    line-height: 1.7;
    display: flex;
    flex-direction: column;
    flex: 1;
}

/* ---------------------------------------------------- */
/* 4. TECHNOLOGIE - BULLET POINTY                       */
/* ---------------------------------------------------- */

.short-description-points {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin-top: auto;
    padding-top: 1.5rem;
}

.short-description-points li {
    position: relative;
    padding-left: 15px;
    color: #666;
    font-size: 0.9em;
    line-height: 1.5;
}

.short-description-points li::before {
    content: "•";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 1.2em;
}

/* ---------------------------------------------------- */
/* 5. MODAL OVERLAY                                     */
/* ---------------------------------------------------- */

.modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    overflow: hidden;
}

/* ---------------------------------------------------- */
/* 6. MODAL OKNO                                        */
/* ---------------------------------------------------- */

.modal-window {
    position: relative;
    width: 85vw;
    height: 83vh;
    max-width: 1000px;
    background: white;
    border-radius: 16px;
    padding: 5rem;
    overflow: hidden;
    box-shadow:
        0 25px 60px rgba(0,0,0,0.35);
    animation: modal-open 0.25s ease-out;
}

.modal-content {
    height: 100%;
    overflow-y: auto;
    padding-right: 1rem;
}

.modal-title {
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;
    color: #00ABE4;
}

@keyframes modal-open {
    from {
        opacity: 0;
        transform: scale(0.85);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }

}

/* ---------------------------------------------------- */
/* 7. ZAVÍRACÍ TLAČÍTKO                                 */
/* ---------------------------------------------------- */

.close-button {
    position: absolute;
    top: 15px;
    right: 20px;
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    font-size: 2.5rem;
    line-height: 1;
    cursor: pointer;
    color: #666;
    transition: color 0.2s ease;
}

.close-button:hover {
    color: #00ABE4;
}

/* ---------------------------------------------------- */
/* 8. EXPANDOVANÝ OBSAH SLOTU                           */
/* ---------------------------------------------------- */

.expanded-content {
    color: #333;
    padding: 1rem 0.5rem;
    font-size: 1.1rem;
    line-height: 1.6;
}

:deep(.expanded-content a) {
    color: #00ABE4;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

:deep(.expanded-content img) {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    display: block;
    margin: 1.5rem auto;
}

:deep(.expanded-content a:hover) {
    text-decoration: underline;
    color: #0089b5;
}

:deep(.expanded-content p) {
    color: #333;
    text-align: left;
    margin-bottom: 1.5em;
}

/* ---------------------------------------------------- */
/* 9. MOBILNÍ VERZE                                     */
/* ---------------------------------------------------- */

@media (max-width: 768px) {
    .portfolio-item {
        padding: 1rem;
        margin-bottom: 1rem;

    }

    .portfolio-item:hover {
        transform: none;
    }

    .short-description {
        font-size: 0.9rem;
    }

    .short-description-points {
        flex-direction: column;
        gap: 5px;
    }

    h3 {
        font-size: 1.4rem;
    }

    .modal-window {
        width: 90vw;
        height: 85vh;
        padding: 1.5rem;
    }

    .expanded-content {
        font-size: 1rem;
    }
}
</style>