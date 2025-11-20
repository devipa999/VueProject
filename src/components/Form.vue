<script setup>
import Input from './Input.vue'
import BlueButton from '@/components/BlueButton.vue'

</script>

<template>
  <form>
    <div class="form_group">
      <Input type="name" placeholder="ФИО"></Input>
      <Input type="phone" class="div2" placeholder="Телефон"></Input>
      <Input type="text" :textaria="true" class="div3" placeholder="Предложение"></Input>
    </div>
    <BlueButton class="btn" name="Отправить" :sumbit="true"></BlueButton>
  </form>
</template>

<style scoped>
.form_group{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 5em;
  row-gap: 1.5em;
  width: 100%;

}
form{
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
.btn{
  margin: 0 auto;
}

.div2 {
  grid-column-start: 1;
  grid-row-start: 2;
}

.div3 {
  grid-row: span 2 / span 2;
  grid-column-start: 2;
  grid-row-start: 1;
  padding-bottom: 5em;
}
@media screen and (width< 1279px) and (width>767px) {
  form{
    width: 100%;
  }


}

@media screen and (width< 767px) {
  form{
    width: 100%;
  }
  .form_group{
    column-gap: 2em;

  }



}


</style>
