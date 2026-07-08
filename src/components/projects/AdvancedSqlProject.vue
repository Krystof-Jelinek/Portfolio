<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import ProjectCard from '../ProjectCard.vue';

const { t } = useI18n();
</script>

<template>
  <ProjectCard 
    title="Advanced SQL"
    :shortDescription="t('sql.sqlShort')"
    :technologies="['PLSQL', 'PgPLSQL', 'Triggers']"
  >
    <p>{{ t('sql.sqlLong1') }}</p>
    <p>{{ t('sql.sqlLong2') }}</p>
    <p>{{ t('sql.sqlLong3') }}</p>

    <p>
      <a href="https://github.com/Krystof-Jelinek/FIT_SQL_assignments" target="_blank">
        GitHub repository
      </a>
    </p>
  </ProjectCard>
</template>