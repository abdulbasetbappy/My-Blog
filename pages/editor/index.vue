<template>
  <div>
    <!--Title Input -->
    <div class="flex justify-start mb-4 gap-4 text-gray-700 items-center">
      <p class="text-3xl font-medium">Title</p>
      <input
        class="w-full h-14 border border-gray-500 focus:outline-none tracking-normal rounded-md px-3 py-2 font-medium text-2xl"
        type="text"
      />
    </div>
        <!--Title Input End-->
    <!-- Editor Buttons -->
    <div class="flex flex-wrap justify-center items-start border border-gray-500 p-3 gap-2" v-if="editor">
      <!--Bold Button-->
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="border rounded-md border-gray-500 p-1"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M8.8 19q-.825 0-1.412-.587T6.8 17V7q0-.825.588-1.412T8.8 5h3.525q1.625 0 3 1T16.7 8.775q0 1.275-.575 1.963t-1.075.987q.625.275 1.388 1.025T17.2 15q0 2.225-1.625 3.113t-3.05.887zm1.025-2.8h2.6q1.2 0 1.463-.612t.262-.888q0-.275-.262-.887T12.35 13.2H9.825zm0-5.7h2.325q.825 0 1.2-.425t.375-.95q0-.6-.425-.975t-1.1-.375H9.825z"/></svg>
      </button>
            <!--Italic Button-->
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="border rounded-md border-gray-500 p-1"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M6.25 19q-.525 0-.888-.363T5 17.75q0-.525.363-.888t.887-.362H9l3-9H9.25q-.525 0-.888-.363T8 6.25q0-.525.363-.888T9.25 5h7.5q.525 0 .888.363T18 6.25q0 .525-.363.888t-.887.362H14.5l-3 9h2.25q.525 0 .888.363t.362.887q0 .525-.363.888T13.75 19z"/></svg>
      </button>
            <!--Strike Button-->
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
        class="border rounded-md border-gray-500 p-1"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M3 14q-.425 0-.712-.288T2 13q0-.425.288-.712T3 12h18q.425 0 .713.288T22 13q0 .425-.288.713T21 14zm7.5-4V7h-4q-.625 0-1.062-.437T5 5.5q0-.625.438-1.062T6.5 4h11q.625 0 1.063.438T19 5.5q0 .625-.437 1.063T17.5 7h-4v3zm0 6h3v2.5q0 .625-.437 1.063T12 20q-.625 0-1.062-.437T10.5 18.5z"/></svg>
      </button>
      <!--Code Button-->
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M4.825 12.025L8.7 15.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T2.426 12q0-.2.063-.375T2.7 11.3l4.6-4.6q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712zm14.35-.05L15.3 8.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.3.3-.7.288t-.7-.313q-.3-.3-.3-.712t.3-.713z"/></svg>
      </button>
      <!--Clear Marks Button-->
      <button @click="editor.chain().focus().unsetAllMarks().run()">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M4 17q-.425 0-.712-.288T3 16q0-.425.288-.712T4 15h12q.425 0 .713.288T17 16q0 .425-.288.713T16 17zm2-4q-.425 0-.712-.288T5 12q0-.425.288-.712T6 11h12q.425 0 .713.288T19 12q0 .425-.288.713T18 13zm2-4q-.425 0-.712-.288T7 8q0-.425.288-.712T8 7h12q.425 0 .713.288T21 8q0 .425-.288.713T20 9z"/></svg>
      </button>
      <!--Clear Nodes Button-->
      <button @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </button>
      <!--Paragraph Button-->
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M10 20q-.425 0-.712-.288T9 19v-5q-2.075 0-3.537-1.463T4 9q0-2.075 1.463-3.537T9 4h8q.425 0 .713.288T18 5q0 .425-.288.713T17 6h-1v13q0 .425-.288.713T15 20q-.425 0-.712-.288T14 19V6h-3v13q0 .425-.288.713T10 20"/></svg>
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

      <!--List Buttons-->
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        bullet list
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        ordered list
      </button>

      <!--Code Block Button-->
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M19.775 22.625L7 9.85l-2.175 2.175L9.4 16.6L8 18l-6-6l3.575-3.575l-4.2-4.2L2.8 2.8l18.4 18.4zm-1.35-7.05L17 14.15l2.175-2.175L14.6 7.4L16 6l6 6z"/></svg>
      </button>
      <!--Blockquote Button-->
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"viewBox="0 0 24 24"><path fill="currentColor" d="M6.55 16.5L8 14q-1.65 0-2.825-1.175T4 10q0-1.65 1.175-2.825T8 6q1.65 0 2.825 1.175T12 10q0 .575-.137 1.063T11.45 12l-3.175 5.5q-.125.225-.35.363t-.5.137q-.575 0-.862-.5t-.013-1m9 0L17 14q-1.65 0-2.825-1.175T13 10q0-1.65 1.175-2.825T17 6q1.65 0 2.825 1.175T21 10q0 .575-.137 1.063T20.45 12l-3.175 5.5q-.125.225-.35.363t-.5.137q-.575 0-.862-.5t-.013-1"/></svg>
      </button>
      <!--Horizontal Rule Button-->
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M5 13q-.425 0-.712-.288T4 12q0-.425.288-.712T5 11h14q.425 0 .713.288T20 12q0 .425-.288.713T19 13z"/></svg>
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm4.5-10.7q.375 0 .75.15t.675.45l2.575 2.575L19 7.3V5H5v9l3.075-3.1q.3-.3.663-.45t.762-.15m3.925 5.25q-.375 0-.75-.137T12 14.975l-2.5-2.5L5 17v2h14v-8.7l-4.1 4.6q-.3.35-.675.5t-.8.15"/></svg>
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19q-.425 0-.712-.288T7 18q0-.425.288-.712T8 17h6.1q1.575 0 2.738-1T18 13.5q0-1.5-1.162-2.5T14.1 10H7.8l1.9 1.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L4.7 9.7q-.15-.15-.213-.325T4.426 9q0-.2.063-.375T4.7 8.3l3.6-3.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L7.8 8h6.3q2.425 0 4.163 1.575T20 13.5q0 2.35-1.737 3.925T14.1 19z"/></svg>
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M16.2 10H9.9q-1.575 0-2.738 1T6 13.5Q6 15 7.163 16T9.9 17H16q.425 0 .713.288T17 18q0 .425-.288.713T16 19H9.9q-2.425 0-4.163-1.575T4 13.5q0-2.35 1.738-3.925T9.9 8h6.3l-1.9-1.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.6 3.6q.15.15.213.325t.062.375q0 .2-.062.375T19.3 9.7l-3.6 3.6q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7z"/></svg>
      </button>
    </div>
    <TiptapEditorContent :editor="editor" />

    <div>dsfgdsfg</div>
    <span v-html="foo"></span>
    <span>{{ foo }}</span>
  </div>
</template>

<script setup>
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
// import StarterKit from '@tiptap/starter-kit'

const foo = ref(1);

const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [TiptapStarterKit, Color, TextStyle],
  editorProps: {
    attributes: {
      class:
        "border border-gray-500 p-4 shadow-lg bg-white min-h-[16rem] max-h-[16rem] overflow-y-auto focus:outline-none",
    },
  },

  onUpdate: ({ editor }) => {
    const json = editor.getJSON();
    foo.value = editor.getHTML();

    console.log(data.editorData);
    console.log(editor.getHTML());
  },
});

const textColorChangeFunction = () => {
  console.log("hello");
};
</script>

<style>
/* Basic editor styles */

code {
  font-size: 0.9rem;
  padding: 0.25em;
  border-radius: 0.25em;
  background-color: #999;
  color: #616161;
  box-decoration-break: clone;
}
button{
  border: 1px solid  rgb(107 114 128);;
  border-radius: 0.375rem;
  padding: 0.5em;
  cursor: pointer;
}
.is-active{
  background-color: rgb(107 114 128);
  color: white;
}
</style>
