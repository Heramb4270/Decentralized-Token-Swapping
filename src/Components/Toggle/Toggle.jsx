function Toggle() {
  return (
    <div className="relative left-[70%]">
      <label class="relative inline-flex items-center mb-5 cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer"></input>
        <div class="w-9 h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}
export default Toggle;
