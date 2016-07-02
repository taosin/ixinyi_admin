<template>
  <div class="dropdown v-select" :class="dropdownClasses">
    <div v-el:toggle @mousedown.prevent="toggleDropdown" class="dropdown-toggle clearfix" type="button">
        <span class="form-control" v-if="!searchable && isValueEmpty">
          {{ placeholder }}
        </span>

        <span class="selected-tag" v-for="option in valueAsArray">
          {{ getOptionLabel(option) }}
          <button v-if="multiple" @click="select(option)" type="button" class="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </span>

      <input
        v-el:search
        v-show="searchable"
        v-model="search"
        @keyup.delete="maybeDeleteValue"
        @keyup.esc="onEscape"
        @keyup.up.prevent="typeAheadUp"
        @keyup.down.prevent="typeAheadDown"
        @keyup.enter.prevent="typeAheadSelect"
        @blur="open = false"
        @focus="open = true"
        type="search"
        class="form-control"
        :placeholder="searchPlaceholder"
        :style="{ width: isValueEmpty ? '100%' : 'auto' }"
      >

      <i v-el:open-indicator role="presentation" class="open-indicator"></i>
    </div>

    <ul v-show="open" v-el:dropdown-menu :transition="transition" :style="{ 'max-height': maxHeight }"
        class="dropdown-menu animated">
      <li v-for="option in filteredOptions"
          :class="{ active: isOptionSelected(option), highlight: $index === typeAheadPointer }"
          @mouseover="typeAheadPointer = $index">
        <a @mousedown.prevent="select(option)">
          {{ getOptionLabel(option) }}
        </a>
      </li>
      <li transition="fade" v-if="!filteredOptions.length" class="divider"></li>
      <li transition="fade" v-if="!filteredOptions.length" class="text-center">Sorry, no matching options.</li>
    </ul>
  </div>
</template>


<script>
  export default {
    props: {
      value: {
        default: null
      },
      options: {
        type: Array,
        default() {
          return [];
        },
      },
      maxHeight: {
        type: String,
        default: '400px'
      },
      searchable: {
        type: Boolean,
        default: true
      },
      multiple: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ''
      },
      transition: {
        type: String,
        default: 'expand'
      },
      clearSearchOnSelect: {
        type: Boolean,
        default: true
      },
      label: {
        type: String,
        default: 'label'
      },
      onChange: Function
    },

    data() {
      return {
        search: '',
        open: false,
        typeAheadPointer: -1,
      };
    },
    watch: {
      value(val, old) {
        this.onChange && val !== old ? this.onChange(val) : null;
      },
      options() {
        this.$set('value', this.multiple ? [] : null);
      },
      multiple(val) {
        this.$set('value', val ? [] : null);
      },
      filteredOptions() {
        this.typeAheadPointer = 0;
      },
    },

    methods: {

      select(option) {
        if (!this.isOptionSelected(option)) {
          if (this.multiple) {
            if (!this.value) {
              this.$set('value', [option]);
            } else {
              this.value.push(option);
            }
          } else {
            this.value = option;
          }
        } else {
          if (this.multiple) {
            this.value.$remove(option);
          }
        }
        this.onAfterSelect(option);
      },

      onAfterSelect(option) {
        if (!this.multiple) {
          this.open = !this.open;
          this.$els.search.blur();
        }

        if (this.clearSearchOnSelect) {
          this.search = '';
        }
      },
      toggleDropdown(e) {
        if (e.target === this.$els.openIndicator || e.target === this.$els.search ||
          e.target === this.$els.toggle || e.target === this.$el) {
          if (this.open) {
            this.$els.search.blur();
          } else {
            this.open = true;
            this.$els.search.focus();
          }
        }
      },

      isOptionSelected(option) {
        if (this.multiple && this.value) {
          return this.value.indexOf(option) !== -1;
        }
        return this.value === option;
      },

      getOptionValue(option) {
        if (typeof option === 'object' && option.value) {
          return option.value;
        }
        return option;
      },

      getOptionLabel(option) {
        if (typeof option === 'object') {
          if (this.label && option[this.label]) {
            return option[this.label];
          } else if (option.label) {
            return option.label;
          }
        }
        return option;
      },

      typeAheadUp() {
        if (this.typeAheadPointer > 0) this.typeAheadPointer--;
      },

      typeAheadDown() {
        if (this.typeAheadPointer < this.filteredOptions.length - 1) this.typeAheadPointer++;
      },

      typeAheadSelect() {
        if (this.filteredOptions[this.typeAheadPointer]) {
          this.select(this.filteredOptions[this.typeAheadPointer]);
        }

        if (this.clearSearchOnSelect) {
          this.search = '';
        }
      },

      onEscape() {
        if (!this.search.length) {
          this.$els.search.blur();
        } else {
          this.$set('search', '');
        }
      },

      maybeDeleteValue() {
        if (!this.$els.search.value.length && this.value) {
          return this.multiple ? this.value.pop() : this.$set('value', null);
        }
      }
    },

    computed: {

      dropdownClasses() {
        return {
          open: this.open,
          searchable: this.searchable
        };
      },

      searchPlaceholder() {
        if (this.isValueEmpty && this.placeholder) {
          return this.placeholder;
        }
      },

      filteredOptions() {
        return this.$options.filters.filterBy(this.options, this.search);
      },

      isValueEmpty() {
        if (this.value) {
          if (typeof this.value === 'object') {
            return !Object.keys(this.value).length;
          }
          return !this.value.length;
        }

        return true;
      },

      valueAsArray() {
        if (this.multiple) {
          return this.value;
        } else if (this.value) {
          return [this.value];
        }
        return [];
      }
    }

  };
</script>
<style>
  .v-select.dropdown {
    position: relative;
  }

  .v-select .open-indicator {
    position: absolute;
    bottom: 6px;
    right: 10px;
    display: inline-block;
    cursor: pointer;
    pointer-events: all;
    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);
    transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);
  }

  .v-select .open-indicator:before {
    border-color: rgba(60, 60, 60, .5);
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    display: inline-block;
    height: 10px;
    width: 10px;
    vertical-align: top;
    transform: rotate(133deg);
    transition: all 150ms cubic-bezier(1.000, -0.115, 0.975, 0.855);
    transition-timing-function: cubic-bezier(1.000, -0.115, 0.975, 0.855);
  }

  .v-select.open .open-indicator {
    bottom: 1px;
  }

  .v-select.open .open-indicator:before {
    transform: rotate(315deg);
  }

  .v-select .dropdown-toggle {
    display: block;
    padding: 0;
    background: none;
    border: 1px solid rgba(60, 60, 60, .26);
    border-radius: 0px;
    white-space: normal;
  }

  .v-select.searchable .dropdown-toggle {
    cursor: text;
  }

  .v-select.open .dropdown-toggle {
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .v-select > .dropdown-menu {
    margin: 0;
    width: 100%;
    overflow-y: auto;
    border-top: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .v-select .selected-tag {
    color: #333;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 0px;
    height: 26px;
    margin: 4px 1px 0px 3px;
    padding: 0 0.25em;
    float: left;
    line-height: 1.7em;
  }

  .v-select .selected-tag .close {
    float: none;
    margin-right: 0;
    font-size: 20px;
  }

  .v-select input[type=search],
  .v-select input[type=search]:focus {
    display: inline-block;
    border: none;
    outline: none;
    margin: 0;
    padding: 0 .5em;
    width: 10em;
    max-width: 100%;
    background: none;
    position: relative;
    box-shadow: none;
    float: left;
    clear: none;
  }

  .v-select input[type=search]:disabled {
    cursor: pointer;
  }

  .v-select li a {
    cursor: pointer;
  }

  .v-select .active a {
    background: rgba(50, 50, 50, .1);
    color: #333;
  }

  .v-select .highlight a,
  .v-select li:hover > a {
    background: #f0f0f0;
    color: #333;
  }
</style>
