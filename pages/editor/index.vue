<script setup>
//Import From PrimeVue
import MultiSelect from "primevue/multiselect";
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
//Import Composables
import { useParentCategory } from "~/composables/useParentCategory";
//Import From Tiptap Text Editor
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import OrderedList from "@tiptap/extension-ordered-list";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import HardBreak from "@tiptap/extension-hard-break";
import Blockquote from "@tiptap/extension-blockquote";
import Highlight from "@tiptap/extension-highlight";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Link from "@tiptap/extension-link";
import Youtube from "@tiptap/extension-youtube";
import FontFamily from "@tiptap/extension-font-family";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TextAlign from "@tiptap/extension-text-align";
// import StarterKit from '@tiptap/starter-kit'

//TipTap Editor
const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [
    TiptapStarterKit,
    Color,
    TextStyle,
    Underline,
    BulletList,
    ListItem,
    OrderedList,
    HorizontalRule,
    HardBreak,
    Blockquote,
    Highlight,
    TaskItem,
    TaskList,
    Link,
    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Youtube.configure({
      width: 480,
      height: 320,
      inline: false,
      controls: false,
      autoplay: true,
      loop: "true",
      progressBarColor: "white",
    }),
    FontFamily,
    Table.configure({
      resizable: true,
    }),
    TableCell,
    TableHeader,
    TableRow,
  ],
  editorProps: {
    attributes: {
      class:
        "prose max-w-none border border-gray-500 p-4 leading-3 shadow-lg bg-white min-h-[32rem] max-h-[16rem] overflow-y-auto focus:outline-none",
    },
  },
  onUpdate: ({ editor }) => {
    payload.editorContent = editor.getHTML();
  },
});

//setLink
const setLink = () => {
  const previousUrl = editor.value.getAttributes("link").href;
  const url = window.prompt("URL", previousUrl);

  // cancelled
  if (url === null) {
    return;
  }

  // empty
  if (url === "") {
    editor.value.chain().focus().extendMarkRange("link").unsetLink().run();

    return;
  }

  // update link
  editor.value
    .chain()
    .focus()
    .extendMarkRange("link")
    .setLink({ href: url })
    .run();
};
//Youtube video
const addVideo = () => {
  const url = prompt("Enter YouTube URL");

  editor.value.commands.setYoutubeVideo({
    src: url,
    width: 640, // Default width
    height: 480, // Default height
  });
};
//BeforeMounted Editor Value Delete
onBeforeUnmount(() => {
  editor.value.destroy();
});


//Multiple Select Dropdown
const Options = ref(useParentCategory().parentCategory);
//Status
const statusOptions = ref([
  { name: "Draft"},
  { name: "Published"},
]);

//Payload for the form value Store
const payload = reactive({
  title: "",
  image: "",
  category: [],
  status: "",
  metaTitle: "",
  metaDescription: "",
  editorContent: "",
});
//Handle Form
const handleSubmit = () => {
  console.log(payload);
};
//Handle File Change
const handleFileChange = (e) => {
  payload.image = e.target.files[0];
  console.log(payload.image);
};
</script>

<template>
  <!--Input Field-->
  <div class="flex flex-row gap-2">
    <div class="border-2 w-full">
      <!--Title Input -->
      <div class="flex justify-start flex-col mb-4 text-gray-700 items-start">
        <p class="text-xl font-medium">Title</p>
        <input
          class="w-full h-10 border border-gray-500 focus:outline-none tracking-normal rounded-md px-3 py-2 font-medium text-xl"
          type="text"
          v-model="payload.title"
        />
      </div>
      <!--Category/Image/Status Input -->
      <div class="flex mb-3 w-full">
        <!--Category Selection-->
        <div class="w-2/4">
          <p class="text-xl font-medium">Category</p>
          <MultiSelect
            v-model="payload.category"
            display="chip"
            :options="Options"
            optionLabel="name"
            placeholder="Select Cities"
            :maxSelectedLabels="3"
            class="w-full border border-gray-500 md:w-20rem"
          />
        </div>

        <!--Image Upload-->
        <div class="w-1/4 mx-2">
          <p class="text-xl font-medium">Upload Image</p>
          <input type="file" @change="handleFileChange">
          {{ payload.image}}
        </div>

        <!--Status Selection-->
        <div class="w-1/4">
          <p class="text-xl font-medium">Status</p>
          <Dropdown
            v-model="payload.status"
            :options="statusOptions"
            optionLabel="name"
            placeholder="Select Status"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
  <!--Input Field End-->
  <!-- Editor Buttons -->
  <div
    class="flex flex-wrap justify-start items-start border border-gray-500 p-3 gap-2"
    v-if="editor"
  >
    <!--Font Family-->
    <div class="p-2 border hidden border-gray-500 rounded-md flex gap-1">
      <button
        @click="editor.chain().focus().setFontFamily('Arial').run()"
        :class="{ 'is-active': editor.isActive('fontFamily', 'Arial') }"
      >
        Arial
      </button>
      <button
        @click="editor.chain().focus().setFontFamily('Georgia').run()"
        :class="{ 'is-active': editor.isActive('fontFamily', 'Georgia') }"
      >
        Georgia
      </button>
      <button
        @click="editor.chain().focus().setFontFamily('Times New Roman').run()"
        :class="{
          'is-active': editor.isActive('fontFamily', 'Times New Roman'),
        }"
      >
        Times New Roman
      </button>
      <button
        @click="editor.chain().focus().setFontFamily('Verdana').run()"
        :class="{ 'is-active': editor.isActive('fontFamily', 'Verdana') }"
      >
        Verdana
      </button>
    </div>
    <!--Font Family End-->

    <!--Text Size-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Paragraph Button-->
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        <Icon
          name="material-symbols:format-paragraph-rounded"
          class="h-5 w-5"
        />
      </button>
      <!--Headings-->
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        h1
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        h2
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        h3
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        h4
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        h5
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        h6
      </button>
    </div>
    <!--Text Size End-->

    <!--Text Edit-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Bold Button-->
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon name="material-symbols:format-bold-rounded" class="h-5 w-5" />
      </button>
      <!--Italic Button-->
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="border rounded-md border-gray-500 p-0"
      >
        <Icon name="material-symbols:format-italic-rounded" class="h-5 w-5" />
      </button>
      <!--Strike Button-->
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon
          name="material-symbols:format-strikethrough-rounded"
          class="h-5 w-5"
        />
      </button>
      <!--Underline Button-->
      <button
        @click="editor.chain().focus().toggleUnderline().run()"
        :disabled="!editor.can().chain().focus().toggleUnderline().run()"
        :class="{ 'is-active': editor.isActive('underline') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon
          name="material-symbols:format-underlined-rounded"
          class="h-5 w-5"
        />
      </button>
    </div>
    <!--Text Edit End-->

    <!--Text Alignment -->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <button
        @click="editor.chain().focus().setTextAlign('left').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
      >
        <Icon
          name="material-symbols:format-align-left-rounded"
          class="h-5 w-5"
        />
      </button>
      <button
        @click="editor.chain().focus().setTextAlign('center').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
      >
        <Icon
          name="material-symbols:format-align-center-rounded"
          class="h-5 w-5"
        />
      </button>
      <button
        @click="editor.chain().focus().setTextAlign('right').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
      >
        <Icon
          name="material-symbols:format-align-right-rounded"
          class="h-5 w-5"
        />
      </button>
      <button
        @click="editor.chain().focus().setTextAlign('justify').run()"
        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
      >
        <Icon
          name="material-symbols:format-align-justify-rounded"
          class="h-5 w-5"
        />
      </button>
    </div>
    <!--Text Alignment End-->

    <!--Text Color-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Text Color Button-->
      <div
        class="flex items-center border border-gray-500 rounded-md p-1 gap-1"
      >
        <input
          type="color"
          @input="editor.chain().focus().setColor($event.target.value).run()"
          :value="editor.getAttributes('textStyle').color"
        />
        <Icon
          name="material-symbols:colorize-outline-rounded"
          class="h-5 w-5"
        />
      </div>

      <!-- Highlight Text-->
      <button
        @click="editor.chain().focus().toggleHighlight().run()"
        :class="{ 'is-active': editor.isActive('highlight') }"
      >
        <Icon
          name="material-symbols:format-ink-highlighter-rounded"
          class="h-5 w-5"
        />
      </button>
    </div>
    <!--Text Color End-->

    <!--List Block-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!-- UnOrder list-->
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <Icon
          name="material-symbols:format-list-bulleted-rounded"
          class="h-5 w-5"
        />
      </button>
      <!--Order list-->
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <Icon
          name="material-symbols:format-list-numbered-rounded"
          class="h-5 w-5"
        />
      </button>
      <!--Task List-->
      <button
        @click="editor.chain().focus().toggleTaskList().run()"
        :class="{ 'is-active': editor.isActive('taskList') }"
      >
        <Icon name="material-symbols:event-list-outline" class="h-5 w-5" />
      </button>
    </div>
    <!--List End-->

    <!--Text Block-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Code Button-->
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        <Icon name="material-symbols:code-rounded" class="h-5 w-5" />
      </button>
      <!--Code Block Button-->
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        <Icon name="material-symbols:code-off-rounded" class="h-5 w-5" />
      </button>
      <!--Blockquote Button-->
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <Icon
          name="material-symbols:format-quote-outline-rounded"
          class="h-5 w-5"
        />
      </button>
      <!--Horizontal Rule Button-->
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        <Icon name="material-symbols:horizontal-rule-rounded" class="h-5 w-5" />
      </button>
      <!--Hard Break-->
      <button @click="editor.chain().focus().setHardBreak().run()">
        <Icon
          name="material-symbols:insert-page-break-outline-rounded"
          class="h-5 w-5"
        />
      </button>
    </div>
    <!--Text Block End-->

    <!--Table Buttons-->
    <div class="p-2 border border-gray-500 rounded-md flex-wrap flex gap-1">
      <!--Insert Table-->
      <button
        @click="
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        "
      >
        <Icon name="tabler:columns" class="h-5 w-5" />
      </button>
      <!--Delete Table-->
      <button @click="editor.chain().focus().deleteTable().run()">
        <Icon name="tabler:columns-off" class="h-5 w-5 rotate-180" />
      </button>
      <!--Add Column Before-->
      <button @click="editor.chain().focus().addColumnBefore().run()">
        <Icon name="tabler:column-insert-left" class="h-5 w-5" />
      </button>
      <!--Delete Column-->
      <button @click="editor.chain().focus().deleteColumn().run()">
        <Icon name="tabler:column-remove" class="h-5 w-5" />
      </button>
      <!--Add Column After-->
      <button @click="editor.chain().focus().addColumnAfter().run()">
        <Icon name="tabler:column-insert-right" class="h-5 w-5" />
      </button>
      <!--Add Row Before-->
      <button @click="editor.chain().focus().addRowBefore().run()">
        <Icon name="tabler:column-insert-left" class="h-5 w-5 rotate-90" />
      </button>
      <!--Delete Row-->
      <button @click="editor.chain().focus().deleteRow().run()">
        <Icon name="tabler:column-remove" class="h-5 w-5 rotate-90" />
      </button>
      <!--Add Row After-->
      <button @click="editor.chain().focus().addRowAfter().run()">
        <Icon name="tabler:column-insert-right" class="h-5 w-5 rotate-90" />
      </button>

      <button @click="editor.chain().focus().mergeCells().run()">
        <Icon name="material-symbols:cell-merge-rounded" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().splitCell().run()">
        <Icon name="mdi:table-split-cell" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().toggleHeaderColumn().run()">
        <Icon name="mdi:table-headers-eye-off" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().toggleHeaderRow().run()">
        <Icon name="tabler:table-row" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().toggleHeaderCell().run()">
        <Icon name="heroicons:table-cells" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().mergeOrSplit().run()">
        <Icon name="icon-park-outline:merge" class="h-5 w-5" />
      </button>
      <button
        @click="editor.chain().focus().setCellAttribute('colspan', 2).run()"
      >
        <Icon name="ic:round-table-chart" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().fixTables().run()">
        <Icon name="carbon:data-table-reference" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().goToNextCell().run()">
        <Icon name="material-symbols:arrow-right-alt" class="h-5 w-5" />
      </button>
      <button @click="editor.chain().focus().goToPreviousCell().run()">
        <Icon
          name="material-symbols:arrow-right-alt"
          class="h-5 rotate-180 w-5"
        />
      </button>
    </div>
    <!--Table Buttons End-->

    <!--Undo Redo/Break-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Undo-->
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <Icon name="material-symbols:undo-rounded" class="h-5 w-5" />
      </button>

      <!--Redo-->
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <Icon name="material-symbols:redo-rounded" class="h-5 w-5" />
      </button>
    </div>
    <!--Undo Redo/Break End-->

    <!--Link Block-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Link Button-->
      <button
        @click="setLink"
        :class="{ 'is-active': editor.isActive('link') }"
      >
        <Icon name="material-symbols:link-rounded" class="h-5 w-5" />
      </button>

      <!--Unlink Button-->
      <button
        @click="editor.chain().focus().unsetLink().run()"
        :disabled="!editor.isActive('link')"
      >
        <Icon name="material-symbols:link-off-rounded" class="h-5 w-5" />
      </button>
    </div>
    <!--Link Block End-->
  </div>
  <TiptapEditorContent :editor="editor" />

  <!--Meta Data-->
  <div class="flex justify-start flex-row gap-2 mt-4 text-gray-700 items-start">
    <!--Meta Tag-->
    <div class="w-full">
      <p class="text-xl font-medium">
        Meta Tag<span class="text-sm font-normal italic"
          >(Comma-separated",")</span
        >
      </p>
      <input
        class="w-full h-10 border border-gray-500 focus:outline-none tracking-normal rounded-md px-3 py-2 font-medium text-xl"
        type="text"
        v-model="payload.metaTitle"
      />
    </div>
  </div>
  <!--Meta Description-->
  <div class="flex justify-start flex-col my-2 text-gray-700 items-start">
    <p class="text-xl font-medium">
      Meta Description
      <span class="text-sm font-normal italic">(At Least 256 Characters)</span>
    </p>
    <textarea
      class="w-full border border-gray-500 h-[120px] focus:outline-none tracking-normal rounded-md px-3 py-2 font-normal text-sm"
      placeholder="Your Meta Description goes here..."
      v-model="payload.metaDescription"
    />
  </div>
  <!--Meta Data End-->
  <button @click.prevent="handleSubmit" >Submit</button>
</template>

<style scoped>
/* Basic editor styles */

code {
  font-size: 0.9rem;
  padding: 0.25em;
  border-radius: 0.25em;
  background-color: #999;
  color: #616161;
  box-decoration-break: clone;
}
button {
  border: 1px solid rgb(107 114 128);
  border-radius: 0.375rem;
  padding: 0.5em;
  cursor: pointer;
}
.is-active {
  background-color: rgb(107 114 128);
  color: white;
}
/* Basic editor styles */
.tiptap > * + * {
  margin-top: 0.75em;
}

.tiptap ul {
  padding: 0 1rem;
}
.tiptap ul li {
  list-style-type: disc !important;
}
</style>
