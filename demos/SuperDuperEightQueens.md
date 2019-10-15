---
title: The Super Duper Eight Queens Problem
description: Yeah I was bored that weekend
footer: MIT Licensed | Copyright © 2018-present by Samuel Faure <3
---
<div align="center">
  <h1>The Super Duper Eight Queens problem</h1>

  This is a small Vue component I hacked one weekend. You are welcome to play with it !
  <hr>
</div>

<EightQueens/>

<script>
import EightQueens from '../assets/Queens.vue'

export default {
  components: {
    'EightQueens': EightQueens
  }
}
</script>
