<script setup>
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

// import StarterKit from '@tiptap/starter-kit'

//TipTap Editor
const foo = ref(1);
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
    Youtube.configure({
      width: 480,
      height: 320,
      inline: false,
      controls: false,
      autoplay: true,
      loop: 'true',
      progressBarColor: 'white',
    }),
    FontFamily,
  ],
  editorProps: {
    attributes: {
      class:
        "prose max-w-none border border-gray-500 p-4 shadow-lg bg-white min-h-[32rem] max-h-[16rem] overflow-y-auto focus:outline-none",
    },
  },
  onUpdate: ({ editor }) => {
    foo.value = editor.getHTML();
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
  const url = prompt('Enter YouTube URL');

  editor.value.commands.setYoutubeVideo({
    src: url,
    width: 640, // Default width
    height: 480, // Default height
  });
};
onBeforeUnmount(() => {
  editor.value.destroy();
});


</script>

<template>
  <!-- Editor Buttons -->
  <div
    class="flex flex-wrap justify-center items-start border border-gray-500 p-3 gap-2"
    v-if="editor"
  >
    <!--Font Family-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
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

    <!--Text Edit-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Bold Button-->
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon name="material-symbols:format-bold-rounded" class="h-6 w-6" />
      </button>
      <!--Italic Button-->
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="border rounded-md border-gray-500 p-1"
      >
        <Icon name="material-symbols:format-italic-rounded" class="h-6 w-6" />
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
          class="h-6 w-6"
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
          class="h-6 w-6"
        />
      </button>
    </div>
    <!--Text Edit End-->

    <!--Text Size-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Paragraph Button-->
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        <Icon
          name="material-symbols:format-paragraph-rounded"
          class="h-6 w-6"
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
          class="h-6 w-6"
        />
      </div>

      <!-- Highlight Text-->
      <button
        @click="editor.chain().focus().toggleHighlight().run()"
        :class="{ 'is-active': editor.isActive('highlight') }"
      >
        <Icon name="material-symbols:highlight-rounded" class="h-6 w-6" />
      </button>
    </div>
    <!--Text Color End-->

    <!--Text Block-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Code Button-->
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        <Icon name="material-symbols:code-rounded" class="h-6 w-6" />
      </button>
      <!--Code Block Button-->
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        <Icon name="material-symbols:code-off-rounded" class="h-6 w-6" />
      </button>
      <!--Blockquote Button-->
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <Icon
          name="material-symbols:format-quote-outline-rounded"
          class="h-6 w-6"
        />
      </button>
      <!--Horizontal Rule Button-->
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        <Icon name="material-symbols:horizontal-rule-rounded" class="h-6 w-6" />
      </button>
    </div>
    <!--Text Block End-->

    <!--List Block-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!-- UnOrder list-->
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <Icon
          name="material-symbols:format-list-bulleted-rounded"
          class="h-6 w-6"
        />
      </button>
      <!--Order list-->
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <Icon
          name="material-symbols:format-list-numbered-rounded"
          class="h-6 w-6"
        />
      </button>
      <!--Task List-->
      <button
        @click="editor.chain().focus().toggleTaskList().run()"
        :class="{ 'is-active': editor.isActive('taskList') }"
      >
        <Icon name="material-symbols:event-list-outline" class="h-6 w-6" />
      </button>
    </div>
    <!--List End-->

    <!--Link Block-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Link Button-->
      <button
        @click="setLink"
        :class="{ 'is-active': editor.isActive('link') }"
      >
        <Icon name="material-symbols:link-rounded" class="h-6 w-6" />
      </button>

      <!--Unlink Button-->
      <button
        @click="editor.chain().focus().unsetLink().run()"
        :disabled="!editor.isActive('link')"
      >
        <Icon name="material-symbols:link-off-rounded" class="h-6 w-6" />
      </button>

      <!--Youtube-->
      <button @click="addVideo">
        <Icon name="tabler:brand-youtube-filled" class="h-6 w-6" />
      </button>
    </div>

    <!--Undo Redo/Break-->
    <div class="p-2 border border-gray-500 rounded-md flex gap-1">
      <!--Undo-->
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <Icon name="material-symbols:undo-rounded" class="h-6 w-6" />
      </button>

      <!--Hard Break-->
      <button @click="editor.chain().focus().setHardBreak().run()">
        <Icon
          name="material-symbols:insert-page-break-outline-rounded"
          class="h-6 w-6"
        />
      </button>

      <!--Redo-->
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <Icon name="material-symbols:redo-rounded" class="h-6 w-6" />
      </button>
    </div>
  </div>
  <TiptapEditorContent :editor="editor" />
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
