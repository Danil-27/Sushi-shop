<template>
  <q-card v-for="card in cards" :key="card.id" class="catalog-card">
    <router-link :to="`/catalog/${card.id}`">
      <img
        class="catalog-card__img"
        :src="card.imgUrl"
        alt="product pictures"
      />
    </router-link>

    <q-card-section class="info">
      <div class="info__top">
        <div class="catalog-card__title">{{ card.title }}</div>

        <div class="catalog-card__weight">Вес: {{ card.weight }}</div>
        <div
          v-if="'description' in card && card.description"
          class="catalog-card__desc clamp-2"
        >
          {{ card.description }}
        </div>
      </div>
      <div class="info__bottom">
        <div class="catalog-card__price">
          {{ card.price }}<span class="currency"> грн</span>
        </div>
        <div class="action-btns">
          <q-btn
            flat
            class="action-btns__like"
            @click="$emit('addToFavorites', card)"
            ><i class="like-icon"></i
          ></q-btn>
          <q-btn
            flat
            icon="add"
            class="action-btns__plus"
            @click="$emit('addToCart', card)"
          />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { CatalogItem, CatalogItemNapitok } from 'src/assets/mock-data/type';

defineProps({
  cards: Array<CatalogItem | CatalogItemNapitok>,
});
defineEmits(['addToFavorites', 'addToCart']);
</script>

<style scoped lang="scss">
@import 'src/css/_custom-variables';
.catalog-card {
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  max-width: 380px;
  height: 596px;
  padding: 24px;
  border-radius: $br-1;
  & > * {
    padding: 0;
  }
  &__img {
    max-width: 331px;
    transition: 0.3s;
    &:hover {
      cursor: pointer;
    }
  }
  &__title {
    font-family: 'Inter-Bold';
    font-size: 27px;
    line-height: 32px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  &__weight {
    color: $accent-2;
    font-family: 'Inter-Medium';
    font-size: 18px;
    line-height: 26px;
    padding-bottom: 8px;
  }
  &__desc {
    font-family: 'Inter-Regular';
    font-size: 16px;
    line-height: 24px;
    color: #686870;
  }
  &__price {
    font-family: 'Inter-Bold';
    font-size: 40px;
    line-height: 32px;
    .currency {
      color: #686870;
      font-size: 28px;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
}

.action-btns {
  display: flex;
  gap: 12px;
  &__like {
    color: $accent-2;
    background-color: #f5f5f7;
    border-radius: $br-1;
    width: 48px;
    height: 48px;
    position: relative;
    &:hover {
      color: #fff;
      background-color: $accent-2;
    }
    &:hover .like-icon {
      background-image: url('src/assets/icons/favorite_24dp.svg');
    }
    .like-icon {
      background-image: url('src/assets/icons/favorite_border_24dp.svg');
      background-size: cover;
      transition: background-image 0.1s ease-in-out;

      width: 24px;
      height: 24px;
      position: absolute;
    }
  }
  &__plus {
    color: $accent-1;
    background-color: $bg-1;
    border-radius: $br-1;
    width: 76px;
    height: 48px;
    transition: 0.3s;
    &:hover {
      color: #fff;
      background-color: #00cc2d;
    }
  }
}

@media screen and (max-width: 468px) {
  .catalog-card {
    max-width: 343px;
    max-height: 172px;
    padding: 12px;
    flex-direction: row;
    gap: 12px;

    &__img {
      max-width: 96px;
      max-height: 96px;
    }
    &__title {
      font-size: 16px;
      line-height: 24px;
      padding: 0;
    }
    &__weight {
      padding-top: 6px;
      padding-bottom: 6px;
    }
    &__weight,
    &__desc {
      font-size: 12px;
      line-height: 16px;
    }
    &__price {
      font-size: 24px;
      line-height: 30px;
      .currency {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }

  .action-btns {
    gap: 6px;
    &__like {
      width: 40px;
      height: 40px;
    }
    &__plus {
      width: 56px;
      height: 40px;
    }
  }
}
</style>
